import { NextRequest, NextResponse } from 'next/server';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<ExampleResponse> => {
  const json: ApiRequest<ExampleRequest> = await request.json();
  let {
    data: { recaptcha, services },
  } = json;

  if (!recaptcha) {
    return NextResponse.json({ error: 'NO_RECAPTCHA' }, { status: 400 });
  }

  if (services.length < 1) {
    return NextResponse.json({ error: 'NO_SERVICES' }, { status: 400 });
  }

  return NextResponse.json({
    message: 'Success',
    services,
  });
};
