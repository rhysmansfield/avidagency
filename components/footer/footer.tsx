'use client';

import { useExampleForm } from '@/hooks/forms';

import { MultiSelectField } from '@/components/form/multiselect/multiselect-field';

export const Footer = () => {
  const {
    data,
    ref,
    control,
    errors,
    onSubmit,
    isPending,
    isError,
    isSuccess,
  } = useExampleForm();

  return (
    <footer>
      <form ref={ref} onSubmit={onSubmit} className="wrapper">
        <MultiSelectField
          control={control}
          name="services"
          label="Required services"
          options={[
            {
              value: 'web-development',
              label: 'Web Development',
            },
            {
              value: 'mobile-development',
              label: 'Mobile Development',
            },
            {
              value: 'design',
              label: 'Design',
            },
          ]}
        />
        <button>Submit</button>
      </form>
    </footer>
  );
};
