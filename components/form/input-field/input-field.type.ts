import { FieldValues } from 'react-hook-form';

import { FieldProps } from '@/components/form/field.type';

export type InputFieldProps<TFields extends FieldValues> = FieldProps<TFields>;
