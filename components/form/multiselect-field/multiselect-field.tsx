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
      {label && <div className={styles.label}>{label}</div>}
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value: selectedValues } }) => (
          <div className={styles['option__wrapper']}>
            {options.map(({ value, label }) => (
              <div key={value}>
                <input
                  type="checkbox"
                  id={`${name}-${value}`}
                  value={value}
                  checked={selectedValues.includes(value)}
                  onChange={() =>
                    onChange(toggleSelection(selectedValues, value))
                  }
                  className={styles['option__checkbox']}
                />
                <label
                  htmlFor={`${name}-${value}`}
                  className={classList(
                    styles.option,
                    selectedValues.includes(value) && styles['option--active'],
                  )}
                >
                  {label}
                </label>
              </div>
            ))}
          </div>
        )}
      />
      {error && <div className={styles.error}>{error.message}</div>}
    </div>
  );
};
