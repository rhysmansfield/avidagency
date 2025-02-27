import { Controller, FieldValues } from 'react-hook-form';

import { classList } from '@/utils/class-list';

import { InputFieldProps } from './input-field.type';

import styles from './input-field.module.scss';

export const InputField = <TFields extends FieldValues>({
  name,
  type = 'text',
  label,
  placeholder,
  control,
  rules,
  error,
  className,
}: InputFieldProps<TFields>) => {
  return (
    <div className={classList(styles.root, className)}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
      )}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            name={name}
            className={styles.input}
            placeholder={placeholder}
            required={!!rules?.required}
          />
        )}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
