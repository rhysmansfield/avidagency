import {
  AxiosError,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';
import { NextResponse } from 'next/server';

export type ApiRequest<TRequest> = {
  data: TRequest & { recaptcha: string };
};

export type ApiResponse<TResponse> = Promise<
  NextResponse<TResponse> | NextResponse<{ error: string }>
>;

export type AxiosApiError = AxiosError<{
  error: string;
}> | null;

export type AxiosApiResponse<TResponse> = {
  data?: TResponse;
  error: AxiosApiError;
  headers: AxiosResponseHeaders | Partial<RawAxiosResponseHeaders>;
  isError: boolean;
};
