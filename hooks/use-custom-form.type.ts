import { MutationKey, UseMutationResult } from '@tanstack/react-query';
import { BaseSyntheticEvent, RefObject } from 'react';
import {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';

export type UseCustomFormProps<TFields extends FieldValues> = {
  mutationKey: MutationKey;
  url: string;
  defaultValues: DefaultValues<TFields>;
};

export type UseCustomFormResult<TFields extends FieldValues, TResponse> = {
  data?: TResponse;
  ref: RefObject<HTMLFormElement | null>;
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  control: Control<TFields>;
  errors: FieldErrors<TFields>;
  apiError?: string;
} & Pick<UseMutationResult, 'isSuccess' | 'isError' | 'isPending'>;
