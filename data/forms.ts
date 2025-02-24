import { useCustomForm } from '@/hooks/use-custom-form';

import { ExampleRequest } from './forms.type';

export const useExampleForm = () =>
  useCustomForm<ExampleRequest>({
    queryKey: 'Example',
    url: '/example',
    defaultValues: {
      test: '',
    },
  });
