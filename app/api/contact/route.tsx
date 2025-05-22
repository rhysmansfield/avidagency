import { render } from '@react-email/components';
import { NextRequest, NextResponse } from 'next/server';

import ContactThankYou from '@/emails/contact-thank-you';

import { createKlaviyoCustomer } from '@/utils/create-klaviyo-customer';
import { loggedError } from '@/utils/logged-error';
import { sendEmail } from '@/utils/send-email';
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

  const klaviyoError = await createKlaviyoCustomer<ContactResponse>(
    'api/newsletter',
    email,
  );

  if (klaviyoError) return klaviyoError;

  const emailHtml = await render(
    <ContactThankYou title="Thanks for getting in touch!" {...data} />,
  );

  const emailSuccess = await sendEmail({
    to: email,
    subject: 'Avid Agency: Thanks for getting in touch!',
    html: emailHtml,
  });

  if (!emailSuccess) {
    return loggedError({
      source: 'api/contact',
      error: 'Email could not be sent.',
      data,
    });
  }

  return NextResponse.json({ message: 'success' }, { status: 200 });
};
