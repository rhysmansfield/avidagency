import {
  MutationFunction,
  MutationKey,
  UseMutationResult,
} from '@tanstack/react-query';

import { AxiosApiResponse } from '@/types/api/axios';

export type UseRecaptchaMutateProps<TFields, TResponse> = {
  mutationKey: MutationKey;
  mutationFn: MutationFunction<
    AxiosApiResponse<TResponse>,
    TFields & {
      recaptcha: string;
    }
  >;
};

export type UseRecaptchaMutateResult<TFields, TResponse> = UseMutationResult<
  TResponse | undefined,
  Error,
  TFields
>;
