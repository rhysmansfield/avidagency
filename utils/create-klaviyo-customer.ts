import axios from 'axios';

import { loggedError } from '@/utils/logged-error';

import { ApiResponse } from '@/types/api/axios.type';

export async function createKlaviyoCustomer<TResponse>(
  source: string,
  email: string,
): Promise<null | ApiResponse<TResponse>> {
  if (!email) {
    return loggedError({
      source,
      error: 'Email is required',
    });
  }

  try {
    const { status } = await axios.post(
      `https://a.klaviyo.com/client/subscriptions?company_id=${process.env.KLAVIYO_COMPANY_ID}`,
      {
        data: {
          type: 'subscription',
          attributes: {
            profile: {
              data: {
                type: 'profile',
                attributes: {
                  subscriptions: {
                    email: { marketing: { consent: 'SUBSCRIBED' } },
                    sms: {
                      marketing: { consent: 'SUBSCRIBED' },
                      transactional: { consent: 'SUBSCRIBED' },
                    },
                  },
                  email,
                },
              },
            },
          },
          relationships: {
            list: { data: { type: 'list', id: process.env.KLAVIYO_LIST_ID } },
          },
        },
      },
      {
        headers: {
          accept: 'application/vnd.api+json',
          revision: '2025-01-15',
          'content-type': 'application/vnd.api+json',
        },
      },
    );

    if (status !== 202) {
      return loggedError({
        source,
        error: 'Klaviyo API call failed - Fetch complete',
        data: {
          status,
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
