import axios from 'axios';
import { useEffect, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { AxiosApiResponse } from '@/types/api/axios.type';

import {
  UseCustomFormProps,
  UseCustomFormResult,
} from './use-custom-form.type';

import { useReCaptchaMutate } from './use-recaptcha-mutate';

const createApi =
  <TFields extends FieldValues, TResponse>(url: string) =>
  (request: TFields): Promise<AxiosApiResponse<TResponse>> =>
    axios.post(url, { data: request });

export const useCustomForm = <TFields extends FieldValues, TResponse>({
  mutationKey,
  url,
  defaultValues,
}: UseCustomFormProps<TFields>): UseCustomFormResult<TFields, TResponse> => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors: fieldErrors },
    reset,
  } = useForm<TFields>({
    defaultValues,
  });

  const {
    data,
    mutate,
    isError,
    error: apiError,
    isSuccess,
    isPending,
  } = useReCaptchaMutate<TFields, TResponse>({
    mutationKey,
    mutationFn: createApi<TFields, TResponse>(url),
  });

  const onSubmit = (values: TFields) => {
    mutate(values);
  };

  useEffect(() => {
    if ((isError || isSuccess) && ref.current)
      ref.current.scrollIntoView({ behavior: 'smooth' });

    if (isSuccess) reset();
  }, [isError, isSuccess, reset]);

  return {
    data,
    ref,
    isSuccess,
    isError,
    isPending,
    onSubmit: handleSubmit(onSubmit),
    control,
    fieldErrors,
    apiError: apiError?.response?.data.error,
  };
};
