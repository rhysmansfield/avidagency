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
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <label htmlFor={name} className={styles['input__wrapper']}>
            {label && <div className={styles.label}>{label}</div>}
            <input
              {...field}
              type={type}
              name={name}
              className={styles.input}
              placeholder={placeholder}
              required={!!rules?.required}
            />
          </label>
        )}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
