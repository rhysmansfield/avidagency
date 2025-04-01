import { useCustomForm } from '@/hooks/use-custom-form';
import { UseCustomFormResult } from '@/hooks/use-custom-form.type';

import { ContactRequest, ContactResponse } from '@/types/api/contact.type';
import {
  NewsletterRequest,
  NewsletterResponse,
} from '@/types/api/newsletter.type';

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

export const useContactForm = (): UseCustomFormResult<
  ContactRequest,
  ContactResponse
> =>
  useCustomForm<ContactRequest, ContactResponse>({
    mutationKey: ['Contact'],
    url: '/api/contact',
    defaultValues: {
      name: '',
      email: '',
      services: [],
      message: '',
    },
  });
