import axios from 'axios';
import { useEffect, useRef } from 'react';
import { FieldValues, useForm } from 'react-hook-form';

import { AxiosApiResponse } from '@/types/api/axios';

import {
  CustomFormMutationResult,
  CustomFormProps,
  UseCustomFormResult,
} from './use-custom-form.type';

import { useReCaptchaMutate } from './use-recaptcha-mutate';

const createApi =
  <T, R>(url: string) =>
  (request: T): Promise<AxiosApiResponse<R>> =>
    axios.post(url, { data: request });

const useCustomMutate = <T, R>(
  queryKey: string,
  url: string,
): CustomFormMutationResult<T, R> => {
  const apiCall = createApi<T, R>(url);
  return useReCaptchaMutate([queryKey], apiCall);
};

export const useCustomForm = <T extends FieldValues, R>({
  queryKey,
  url,
  defaultValues,
}: CustomFormProps<T>): UseCustomFormResult<T, R> => {
  const ref = useRef<HTMLFormElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<T>({
    defaultValues,
  });

  const { data, mutate, isError, isSuccess, isPending } = useCustomMutate<T, R>(
    queryKey,
    url,
  );

  const onSubmit = (values: T) => {
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
    errors,
  };
};
