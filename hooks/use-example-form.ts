import { UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

import { useReCaptchaMutate } from '@/hooks/use-recaptcha-mutate';

import { useFormProps } from './use-form.type';
import { AxiosApiResponse } from '@/types/api/axios';

type ExampleRequest = {
  test: string;
};

const createExample = (request: ExampleRequest): Promise<AxiosApiResponse> =>
  axios.post('/example', {
    data: request,
  });

export const useExampleMutate = (): UseMutationResult<
  void,
  Error,
  ExampleRequest
> => useReCaptchaMutate(['Example'], createExample);

export const useExampleForm = (): useFormProps<ExampleRequest> => {
  const ref = useRef<HTMLFormElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExampleRequest>({
    defaultValues: {
      test: '',
    },
  });

  const {
    mutate: createExample,
    isError,
    isSuccess,
    isPending,
  } = useExampleMutate();

  const onSubmit = (values: ExampleRequest) => {
    createExample(values);
  };

  useEffect(() => {
    if ((isError || isSuccess) && ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth' });

    if (isSuccess) reset();
  }, [isError, isSuccess, reset]);

  return {
    ref,
    isSuccess,
    isError,
    isPending,
    onSubmit: handleSubmit(onSubmit),
    control,
    errors,
  };
};
