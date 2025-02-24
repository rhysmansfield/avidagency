import { UseMutationResult } from '@tanstack/react-query';
import { BaseSyntheticEvent, RefObject } from 'react';
import {
  Control,
  DefaultValues,
  FieldErrors,
  FieldValues,
} from 'react-hook-form';

export type CustomFormMutationResult<T, R> = UseMutationResult<
  R | undefined,
  Error,
  T
>;

export type CustomFormProps<T extends FieldValues> = {
  queryKey: string;
  url: string;
  defaultValues: DefaultValues<T>;
};

export type UseCustomFormResult<T extends FieldValues, R> = {
  data?: R;
  ref: RefObject<HTMLFormElement | null>;
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  control: Control<T>;
  errors: FieldErrors<T>;
} & Pick<UseMutationResult, 'isSuccess' | 'isError' | 'isPending'>;
