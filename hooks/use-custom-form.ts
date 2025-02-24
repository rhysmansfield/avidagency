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
  <TFields extends FieldValues, TResponse>(url: string) =>
  (request: TFields): Promise<AxiosApiResponse<TResponse>> =>
    axios.post(url, { data: request });

const useCustomMutate = <TFields extends FieldValues, TResponse>(
  queryKey: string,
  url: string,
): CustomFormMutationResult<TFields, TResponse> => {
  const apiCall = createApi<TFields, TResponse>(url);
  return useReCaptchaMutate([queryKey], apiCall);
};

export const useCustomForm = <TFields extends FieldValues, TResponse>({
  queryKey,
  url,
  defaultValues,
}: CustomFormProps<TFields>): UseCustomFormResult<TFields, TResponse> => {
  const ref = useRef<HTMLFormElement>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TFields>({
    defaultValues,
  });

  const { data, mutate, isError, isSuccess, isPending } = useCustomMutate<
    TFields,
    TResponse
  >(queryKey, url);

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
    errors,
  };
};
