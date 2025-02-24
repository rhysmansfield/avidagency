import { UseMutationResult } from '@tanstack/react-query';
import { BaseSyntheticEvent, RefObject } from 'react';
import { Control, DefaultValues, FieldValues } from 'react-hook-form';

export type CustomFormProps<T extends FieldValues> = {
  queryKey: string;
  url: string;
  defaultValues: DefaultValues<T>;
};

export type UseCustomFormResult<T extends FieldValues> = {
  ref: RefObject<HTMLFormElement | null>;
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  control: Control<T>;
  errors: Record<string, any>;
} & Pick<UseMutationResult, 'isSuccess' | 'isError' | 'isPending'>;
