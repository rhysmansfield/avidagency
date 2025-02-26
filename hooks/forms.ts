import { useCustomForm } from '@/hooks/use-custom-form';
import { UseCustomFormResult } from '@/hooks/use-custom-form.type';

import { ExampleRequest, ExampleResponse } from './forms.type';

export const useExampleForm = (): UseCustomFormResult<
  ExampleRequest,
  ExampleResponse
> =>
  useCustomForm<ExampleRequest, ExampleResponse>({
    queryKey: 'Example',
    url: '/api/example',
    defaultValues: {
      services: [],
    },
  });
