import { useCustomForm } from '@/hooks/use-custom-form';
import { UseCustomFormResult } from '@/hooks/use-custom-form.type';

import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';
import {
  NewsletterRequest,
  NewsletterResponse,
} from '@/types/api/newsletter.type';

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

export const useNewsletterForm = (): UseCustomFormResult<
  NewsletterRequest,
  NewsletterResponse
> =>
  useCustomForm<NewsletterRequest, NewsletterResponse>({
    mutationKey: ['Newsletter'],
    url: '/api/newsletter',
    defaultValues: {
      email: '',
    },
  });
