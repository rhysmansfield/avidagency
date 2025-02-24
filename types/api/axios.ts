import {
  AxiosError,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';

export type AxiosApiResponse<R> = {
  data?: R;
  error: AxiosError | null;
  headers: AxiosResponseHeaders | Partial<RawAxiosResponseHeaders>;
  isError: boolean;
};
