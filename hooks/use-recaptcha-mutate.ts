import { useMutation } from '@tanstack/react-query';
import { useReCaptcha } from 'next-recaptcha-v3';

import {
  UseRecaptchaMutateProps,
  UseRecaptchaMutateResult,
} from './use-recaptcha-mutate.type';

export const useReCaptchaMutate = <TFields, TResponse>({
  mutationKey,
  mutationFn,
}: UseRecaptchaMutateProps<TFields, TResponse>): UseRecaptchaMutateResult<
  TFields,
  TResponse
> => {
  const { executeRecaptcha } = useReCaptcha();

  return useMutation({
    mutationKey,
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
