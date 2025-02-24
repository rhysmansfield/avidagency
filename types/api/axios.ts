import {
  AxiosError,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';

export type AxiosApiResponse<TResponse> = {
  data?: TResponse;
  error: AxiosError | null;
  headers: AxiosResponseHeaders | Partial<RawAxiosResponseHeaders>;
  isError: boolean;
};
