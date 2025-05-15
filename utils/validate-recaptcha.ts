import axios from 'axios';
import { env } from 'process';

import { loggedError } from '@/utils/logged-error';

import { ApiResponse } from '@/types/api/axios.type';

export async function validateRecaptcha<TResponse>(
  source: string,
  recaptcha: string,
): Promise<null | ApiResponse<TResponse>> {
  if (!recaptcha) {
    return loggedError({
      source,
      error: 'Recaptcha is required',
      data: {
        recaptcha,
      },
    });
  }

  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${env.RECAPTCHA_PRIVATE_KEY}&response=${recaptcha}`,
  );

  if (!data.success) {
    return loggedError({
      source,
      error: 'Recaptcha is invalid',
      data,
    });
  }

  return null;
}
