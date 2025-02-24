import {
  MutationFunction,
  MutationKey,
  useMutation,
} from '@tanstack/react-query';
import { useReCaptcha } from 'next-recaptcha-v3';

import { AxiosApiResponse } from '@/types/api/axios';
import { ReCaptchaRequest } from '@/types/api/recaptcha';

export const useReCaptchaMutate = <TFields, TResponse>(
  mutationKey: MutationKey,
  mutationFn: MutationFunction<
    AxiosApiResponse<TResponse>,
    TFields & ReCaptchaRequest
  >,
) => {
  const { executeRecaptcha } = useReCaptcha();

  return useMutation({
    mutationKey: [mutationKey],
    mutationFn: async (request: TFields): Promise<TResponse | undefined> => {
      const recaptcha = await executeRecaptcha('form_submit');

      const { data, isError, error } = await mutationFn({
        ...request,
        recaptcha,
      });

      if (isError) throw error;

      return data;
    },
  });
};
