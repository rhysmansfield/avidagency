import { useCustomForm } from '@/hooks/use-custom-form';
import { UseCustomFormResult } from '@/hooks/use-custom-form.type';

import { API_URLS } from '@/data/urls';

import { ContactRequest, ContactResponse } from '@/types/api/contact.type';
import { LandingRequest, LandingResponse } from '@/types/api/landing.type';
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
    url: API_URLS.NEWSLETTER,
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
    url: API_URLS.CONTACT,
    defaultValues: {
      name: '',
      email: '',
      services: [],
      message: '',
    },
  });

export const useLandingForm = (): UseCustomFormResult<
  LandingRequest,
  LandingResponse
> =>
  useCustomForm<LandingRequest, LandingResponse>({
    mutationKey: ['Landing'],
    url: API_URLS.LANDING,
    defaultValues: {
      name: '',
      email: '',
      phoneNumber: '',
      website: '',
    },
  });
