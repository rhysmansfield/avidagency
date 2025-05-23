import { ApiKeySession, ProfilesApi } from 'klaviyo-api';
import { env } from 'process';

import { loggedError } from '@/utils/logged-error';

import { ApiResponse } from '@/types/api/axios.type';

export async function createKlaviyoCustomer<TResponse>(
  source: string,
  email: string,
  phoneNumber?: string,
): Promise<null | ApiResponse<TResponse>> {
  if (!email) {
    return loggedError({
      source,
      error: 'Email is required',
    });
  }

  try {
    const session = new ApiKeySession(env.KLAVIYO_API_KEY!);
    const profilesApi = new ProfilesApi(session);

    const {
      response: { status, statusText },
    } = await profilesApi.bulkSubscribeProfiles({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          profiles: {
            data: [
              {
                type: 'profile',
                attributes: {
                  subscriptions: {
                    email: { marketing: { consent: 'SUBSCRIBED' } },
                  },
                  email,
                  phoneNumber,
                },
              },
            ],
          },
        },
        relationships: {
          list: {
            data: {
              type: 'list',
              id: env.KLAVIYO_LIST_ID!,
            },
          },
        },
      },
    });

    if (status !== 202) {
      return loggedError({
        source,
        error: 'Klaviyo API call failed - Fetch complete',
        data: {
          statusText,
        },
      });
    }
  } catch (error) {
    return loggedError({
      source,
      error: 'Klaviyo API call failed - Fetch failed',
      data: (error as Error).message,
    });
  }

  return null;
}
