import { NextRequest, NextResponse } from 'next/server';

import { createKlaviyoCustomer } from '@/utils/create-klaviyo-customer';
import { validateRecaptcha } from '@/utils/validate-recaptcha';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import { LandingRequest, LandingResponse } from '@/types/api/landing.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<LandingResponse> => {
  const { data }: ApiRequest<LandingRequest> = await request.json();
  const { recaptcha, email, phoneNumber } = data;

  const recaptchaError = await validateRecaptcha<LandingResponse>(
    'api/landing',
    recaptcha,
  );

  if (recaptchaError) return recaptchaError;

  const klaviyoError = await createKlaviyoCustomer<LandingResponse>({
    source: 'api/landing',
    listId: 'S98Y5c',
    email,
    phoneNumber,
  });

  if (klaviyoError) return klaviyoError;

  return NextResponse.json({ message: 'success' }, { status: 200 });
};
