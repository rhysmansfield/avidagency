import { Controller, FieldValues } from 'react-hook-form';

import { classList } from '@/utils/class-list';

import { MultiSelectFieldProps } from './multiselect-field.type';

import styles from './multiselect-field.module.scss';

export const MultiSelectField = <TFields extends FieldValues>({
  name,
  label,
  options,
  control,
  rules,
  error,
  className,
}: MultiSelectFieldProps<TFields>) => {
  const toggleSelection = (selectedValues: string[], optionValue: string) =>
    selectedValues.includes(optionValue)
      ? selectedValues.filter((value) => value !== optionValue)
      : [...selectedValues, optionValue];

  return (
    <div role="group" className={classList(styles.root, className)}>
      <div className={styles.label}>{label}</div>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value: selectedValues } }) => (
          <div className={styles['option__wrapper']}>
            {options.map(({ value, label }) => (
              <label key={value} className={styles.option}>
                <input
                  type="checkbox"
                  value={value}
                  checked={selectedValues.includes(value)}
                  onChange={() =>
                    onChange(toggleSelection(selectedValues, value))
                  }
                  className={styles['option__checkbox']}
                />
                {label}
              </label>
            ))}
          </div>
        )}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
