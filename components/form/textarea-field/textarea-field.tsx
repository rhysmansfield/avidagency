import { Controller, FieldValues } from 'react-hook-form';

import { classList } from '@/utils/class-list';

import { TextareaFieldProps } from './textarea-field.type';

import styles from './textarea-field.module.scss';

export const TextareaField = <TFields extends FieldValues>({
  name,
  label,
  placeholder,
  control,
  rules,
  error,
  className,
}: TextareaFieldProps<TFields>) => {
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
          <textarea
            {...field}
            id={name}
            className={styles.textarea}
            placeholder={placeholder}
            required={!!rules?.required}
          />
        )}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
