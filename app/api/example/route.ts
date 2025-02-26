import { NextRequest, NextResponse } from 'next/server';

import { ExampleRequest, ExampleResponse } from '@/types/api/example.type';

export const POST = async (
  request: NextRequest,
): Promise<
  NextResponse<ExampleResponse> | NextResponse<{ message: string }>
> => {
  const json = await request.json();
  let { data }: { data: ExampleRequest } = json;

  if (data.services.length > 0) {
    return NextResponse.json({ services: data.services });
  }

  return NextResponse.json({ message: 'NO_SERVICES' }, { status: 400 });
};
