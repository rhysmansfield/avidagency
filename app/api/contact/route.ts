import { NextRequest, NextResponse } from 'next/server';

import { createKlaviyoCustomer } from '@/utils/create-klaviyo-customer';
import { loggedError } from '@/utils/logged-error';
import { validateRecaptcha } from '@/utils/validate-recaptcha';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import { ContactRequest, ContactResponse } from '@/types/api/contact.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<ContactResponse> => {
  const { data }: ApiRequest<ContactRequest> = await request.json();
  const { recaptcha, email } = data;

  const recaptchaError = await validateRecaptcha<ContactResponse>(
    'api/Contact',
    recaptcha,
  );

  if (recaptchaError) return recaptchaError;

  return loggedError({
    source: 'api/contact',
    error: 'Contact form is not implemented yet.',
    data,
  });

  return NextResponse.json({ message: 'success' }, { status: 200 });
};
