import {
  Control,
  FieldError,
  FieldValues,
  Merge,
  Path,
  UseControllerProps,
} from 'react-hook-form';

export type FieldProps<TFields extends FieldValues> = {
  name: Path<TFields>;
  label?: string;
  control: Control<TFields>;
  rules?: UseControllerProps<TFields>['rules'];
  error?: Merge<FieldError, (FieldError | undefined)[]>;
  onChange?: (value: any) => void;
  className?: string;
};
