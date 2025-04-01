import axios from 'axios';

import { loggedResponse } from '@/utils/logged-response';

import { ApiResponse } from '@/types/api/axios.type';

export async function validateRecaptcha<TRequest, TResponse>(
  source: string,
  recaptcha: string,
): Promise<null | ApiResponse<TResponse>> {
  if (!recaptcha) {
    return loggedResponse({
      source,
      error: 'Recaptcha is required',
      data: {
        recaptcha,
      },
    });
  }

  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE_KEY}&response=${recaptcha}`,
  );

  if (!data.success) {
    return loggedResponse({
      source,
      error: 'Recaptcha is invalid',
      data,
    });
  }

  return null;
}
