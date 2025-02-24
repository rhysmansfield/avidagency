import { UseMutationResult } from '@tanstack/react-query';
import { BaseSyntheticEvent, RefObject } from 'react';
import {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';

export type CustomFormMutationResult<TFields, TResponse> = UseMutationResult<
  TResponse | undefined,
  Error,
  TFields
>;

export type CustomFormProps<TFields extends FieldValues> = {
  queryKey: string;
  url: string;
  defaultValues: DefaultValues<TFields>;
};

export type UseCustomFormResult<TFields extends FieldValues, TResponse> = {
  data?: TResponse;
  ref: RefObject<HTMLFormElement | null>;
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  control: Control<TFields>;
  errors: FieldErrors<TFields>;
} & Pick<UseMutationResult, 'isSuccess' | 'isError' | 'isPending'>;
