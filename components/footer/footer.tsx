'use client';

import { useExampleForm } from '@/hooks/forms';

import { MultiSelectField } from '@/components/form/multiselect/multiselect-field';

export const Footer = () => {
  const {
    data,
    ref,
    control,
    fieldErrors,
    onSubmit,
    isPending,
    isError,
    apiError,
    isSuccess,
  } = useExampleForm();

  return (
    <footer>
      {isError && <div>Something went wrong: {apiError}</div>}
      {data && <div>You submitted services: {data.services.join(',')}</div>}
      <form ref={ref} onSubmit={onSubmit} className="wrapper">
        <MultiSelectField
          control={control}
          name="services"
          label="Required services"
          rules={{
            required: 'Please select at least one service',
            validate: (value) => {
              return value.length <= 2 || 'Please select at most two services';
            },
          }}
          error={fieldErrors.services}
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
