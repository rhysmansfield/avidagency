import { useCustomForm } from '@/hooks/use-custom-form';
import { UseCustomFormResult } from '@/hooks/use-custom-form.type';

import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';

export const useExampleForm = (): UseCustomFormResult<
  ExampleRequest,
  ExampleResponse
> =>
  useCustomForm<ExampleRequest, ExampleResponse>({
    mutationKey: ['Example'],
    url: '/api/example',
    defaultValues: {
      services: [],
    },
  });
