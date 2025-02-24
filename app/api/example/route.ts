import { NextResponse } from 'next/server';

export const POST = async (request: Request): Promise<NextResponse> => {
  const json = await request.json();
  let {
    data: { test },
  } = json;

  return NextResponse.json({ test });
};
