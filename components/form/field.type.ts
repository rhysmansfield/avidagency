import {
  Control,
  FieldError,
  FieldValues,
  Path,
  UseControllerProps,
} from 'react-hook-form';

export type FieldProps<TFields extends FieldValues> = {
  name: Path<TFields>;
  label: string;
  control: Control<TFields>;
  rules?: UseControllerProps<TFields>['rules'];
  error?: FieldError;
  onChange?: (value: any) => void;
  className?: string;
};
