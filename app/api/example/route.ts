import { NextRequest, NextResponse } from 'next/server';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<ExampleResponse> => {
  const { data }: ApiRequest<ExampleRequest> = await request.json();
  let { recaptcha, services } = data;

  if (!recaptcha) {
    console.error({
      error: 'Recaptcha is required',
      data,
    });
    return NextResponse.json(
      { error: 'Recaptcha is required' },
      { status: 400 },
    );
  }

  if (services.length <= 0) {
    console.error({
      error: 'Services are required',
      data,
    });
    return NextResponse.json({ error: 'No services found' }, { status: 400 });
  }

  return NextResponse.json({ services });
};
