import axios from 'axios';
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
  name,
  website,
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

  const [firstName, lastName] = name?.split(' ') ?? [];

  try {
    const response = await axios.post(
      `https://a.klaviyo.com/client/subscriptions?company_id=${env.KLAVIYO_PUBLIC_KEY}`,
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
                  },
                  email,
                  phone_number: phoneNumber,
                  first_name: firstName,
                  last_name: lastName,
                  properties: website
                    ? {
                        website,
                      }
                    : undefined,
                },
              },
            },
          },
          relationships: {
            list: { data: { type: 'list', id: listId } },
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

    console.log(response);

    if (response.status !== 202) {
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
};
