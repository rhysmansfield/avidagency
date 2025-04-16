import { FieldValues } from 'react-hook-form';

import { FieldProps } from '@/components/form/field.type';

export type TextareaFieldProps<TFields extends FieldValues> =
  FieldProps<TFields> & {
    placeholder?: string;
  };
