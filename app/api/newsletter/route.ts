import { NextRequest, NextResponse } from 'next/server';

import { createKlaviyoCustomer } from '@/utils/create-klaviyo-customer';
import { validateRecaptcha } from '@/utils/validate-recaptcha';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import {
  NewsletterRequest,
  NewsletterResponse,
} from '@/types/api/newsletter.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<NewsletterResponse> => {
  const { data }: ApiRequest<NewsletterRequest> = await request.json();
  const { recaptcha, email } = data;

  const recaptchaError = await validateRecaptcha<NewsletterResponse>(
    'api/newsletter',
    recaptcha,
  );

  if (recaptchaError) return recaptchaError;

  const klaviyoError = await createKlaviyoCustomer<NewsletterResponse>({
    source: 'api/newsletter',
    email,
    listId: 'RfxUXe',
  });

  if (klaviyoError) return klaviyoError;

  return NextResponse.json({ message: 'success' }, { status: 200 });
};
