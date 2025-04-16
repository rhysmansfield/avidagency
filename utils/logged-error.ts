import { NextResponse } from 'next/server';

export const loggedError = <TResponse>({
  source,
  error,
  data,
}: {
  source: string;
  error: string;
  data?: TResponse;
}) => {
  console.error({
    source,
    error,
    data,
  });

  return NextResponse.json({ error }, { status: 400 });
};
