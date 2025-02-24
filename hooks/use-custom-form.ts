import { UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { CustomFormProps, UseCustomFormResult } from './use-custom-form.type';
import { AxiosApiResponse } from '@/types/api/axios';

import { useReCaptchaMutate } from './use-recaptcha-mutate';

const createApi =
  <T>(url: string) =>
  (request: T): Promise<AxiosApiResponse> =>
    axios.post(url, { data: request });

const useCustomMutate = <T>(
  queryKey: string,
  url: string,
): UseMutationResult<void, Error, T> => {
  const apiCall = createApi<T>(url);
  return useReCaptchaMutate([queryKey], apiCall);
};

export const useCustomForm = <T extends FieldValues>({
  queryKey,
  url,
  defaultValues,
}: CustomFormProps<T>): UseCustomFormResult<T> => {
  const ref = useRef<HTMLFormElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>({
    defaultValues,
  });

  const { mutate, isError, isSuccess, isPending, data, error } =
    useCustomMutate<T>(queryKey, url);

  const onSubmit = (values: T) => {
    mutate(values);
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
