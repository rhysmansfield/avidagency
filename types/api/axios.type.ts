import {
  AxiosError,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';
import { NextResponse } from 'next/server';

export type ApiRequest<TResponse> = {
  data: TResponse;
};

export type ApiResponse<TResponse> = Promise<
  | NextResponse<TResponse>
  | NextResponse<{ message: string } | Record<string, boolean>>
>;

export type AxiosApiError = AxiosError<{
  message: string;
}> | null;

export type AxiosApiResponse<TResponse> = {
  data?: TResponse;
  error: AxiosApiError;
  headers: AxiosResponseHeaders | Partial<RawAxiosResponseHeaders>;
  isError: boolean;
};
