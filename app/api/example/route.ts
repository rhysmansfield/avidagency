import { NextRequest, NextResponse } from 'next/server';

import { loggedResponse } from '@/utils/logged-response';
import { validateRecaptcha } from '@/utils/validate-recaptcha';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<ExampleResponse> => {
  const { data }: ApiRequest<ExampleRequest> = await request.json();
  const { recaptcha, services } = data;

  if (!recaptcha) {
    return loggedResponse({
      source: 'api/example',
      error: 'Recaptcha is required',
      data,
    });
  }

  if (!(await validateRecaptcha(recaptcha))) {
    return loggedResponse({
      source: 'api/example',
      error: 'Recaptcha is invalid',
      data,
    });
  }

  if (services.length <= 0) {
    return loggedResponse({
      source: 'api/example',
      error: 'Services are required',
      data,
    });
  }

  return NextResponse.json({ services });
};
