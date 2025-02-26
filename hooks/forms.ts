import { useCustomForm } from '@/hooks/use-custom-form';

import { ExampleRequest, ExampleResponse } from './forms.type';

export const useExampleForm = () =>
  useCustomForm<ExampleRequest, ExampleResponse>({
    queryKey: 'Example',
    url: '/api/example',
    defaultValues: {
      services: [],
    },
  });
