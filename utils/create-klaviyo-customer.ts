import { ApiKeySession, ProfilesApi } from 'klaviyo-api';
import parsePhoneNumberFromString from 'libphonenumber-js';
import { env } from 'process';

import { CreateKlaviyoCustomerProps } from '@/utils/create-klaviyo-customer.type';
import { loggedError } from '@/utils/logged-error';

import { ApiResponse } from '@/types/api/axios.type';

export const createKlaviyoCustomer = async <TResponse>({
  source,
  email,
  phoneNumber,
  listId,
}: CreateKlaviyoCustomerProps): Promise<null | ApiResponse<TResponse>> => {
  if (!email) {
    return loggedError({
      source,
      error: 'Email is required',
    });
  }

  if (phoneNumber) {
    const parsed = parsePhoneNumberFromString(phoneNumber, 'GB');
    if (parsed && parsed.isValid()) phoneNumber = parsed.format('E.164');
    else phoneNumber = undefined;
  }

  console.log({
    email,
    phoneNumber,
    listId,
    source,
  });

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
              id: listId,
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
};
