import axios from 'axios';

import { loggedResponse } from '@/utils/logged-response';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';

export async function validateRecaptcha<TRequest, TResponse>(
  source: string,
  data: ApiRequest<TRequest>['data'],
): Promise<null | ApiResponse<TResponse>> {
  const { recaptcha } = data;

  if (!recaptcha) {
    return loggedResponse<TRequest>({
      source,
      error: 'Recaptcha is required',
      data,
    });
  }

  const {
    data: { success: isValid },
  } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_PRIVATE_KEY}&response=${recaptcha}`,
  );

  if (!isValid) {
    return loggedResponse({
      source,
      error: 'Recaptcha is invalid',
      data,
    });
  }

  return null;
}
