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
    return NextResponse.json({ error: 'Recaptcha is required' });
  }

  if (services.length <= 0) {
    return NextResponse.json({ error: 'No services found' });
  }

  return NextResponse.json({ services });
};
