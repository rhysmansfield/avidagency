import {
  AxiosError,
  AxiosResponseHeaders,
  RawAxiosResponseHeaders,
} from 'axios';

export type AxiosApiResponse = {
  error: AxiosError | null;
  headers: AxiosResponseHeaders | Partial<RawAxiosResponseHeaders>;
  isError: boolean;
};

export type AxiosApiRequest<TRequest> = {
  data: TRequest;
};
