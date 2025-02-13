import { UseMutationResult } from '@tanstack/react-query';
import { BaseSyntheticEvent, RefObject } from 'react';
import { Control, FieldValues } from 'react-hook-form';

export type useFormProps<T extends FieldValues> = {
  ref: RefObject<HTMLFormElement | null>;
  onSubmit: (e: BaseSyntheticEvent) => Promise<void>;
  control: Control<T>;
  errors: Record<string, any>;
} & Pick<UseMutationResult, 'isSuccess' | 'isError' | 'isPending'>;
