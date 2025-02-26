import {
  AxiosError,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';
import { NextResponse } from 'next/server';

export type ApiRequest<TResponse> = {
  data: TResponse & { recaptcha: string };
};

export type ApiResponse<TResponse> = Promise<
  | NextResponse<TResponse & { message: string }>
  | NextResponse<{ error: string } | Record<string, boolean>>
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
