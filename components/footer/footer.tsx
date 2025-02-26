'use client';

import { useExampleForm } from '@/hooks/forms';

import { MultiSelectField } from '@/components/form/multiselect/multiselect-field';

export const Footer = () => {
  const {
    data,
    ref,
    control,
    errors,
    apiError,
    onSubmit,
    isPending,
    isError,
    isSuccess,
  } = useExampleForm();

  return (
    <footer>
      {data && <div>You submitted services: {data.services.join(',')}</div>}
      {isError && <div>Something went wrong. {apiError}</div>}
      <form ref={ref} onSubmit={onSubmit} className="wrapper">
        <MultiSelectField
          control={control}
          name="services"
          label="Required services"
          error={errors.services}
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
