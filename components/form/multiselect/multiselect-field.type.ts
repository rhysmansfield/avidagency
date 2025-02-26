import { FieldValues } from 'react-hook-form';

import { FieldProps } from '@/components/form/field.type';

export type MultiSelectFieldProps<TFields extends FieldValues> =
  FieldProps<TFields> & {
    options: {
      value: string;
      label: string;
    }[];
  };
