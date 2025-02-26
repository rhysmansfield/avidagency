import { NextRequest, NextResponse } from 'next/server';

import { ApiRequest, ApiResponse } from '@/types/api/axios.type';
import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';

export const POST = async (
  request: NextRequest,
): ApiResponse<ExampleResponse> => {
  const json: ApiRequest<ExampleRequest> = await request.json();
  let { data } = json;

  if (data.services.length > 0) {
    return NextResponse.json({ services: data.services });
  }

  return NextResponse.json(
    { message: 'NO_SERVICES', test: true },
    { status: 400 },
  );
};
