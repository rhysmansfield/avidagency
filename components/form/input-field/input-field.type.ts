import { ComponentProps } from 'react';
import { FieldValues } from 'react-hook-form';

import { FieldProps } from '@/components/form/field.type';

export type InputFieldProps<TFields extends FieldValues> =
  FieldProps<TFields> & {
    type?: ComponentProps<'input'>['type'];
    placeholder?: string;
  };
