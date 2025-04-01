import { NextRequest, NextResponse } from 'next/server';

import { loggedResponse } from '@/utils/logged-response';
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
  const { email } = data;

  const recaptchaError = await validateRecaptcha<
    NewsletterRequest,
    NewsletterResponse
  >('api/newsletter', data);

  if (recaptchaError) return recaptchaError;

  if (!email) {
    return loggedResponse({
      source: 'api/example',
      error: 'Email is required',
      data,
    });
  }

  return NextResponse.json({ message: 'success' }, { status: 200 });
};
