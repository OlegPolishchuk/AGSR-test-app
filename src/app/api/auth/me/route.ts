import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { sessionToken, validUserCredentials } from '@/app/(auth)/model/auth';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('session')?.value;

  if (token !== sessionToken) {
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  }

  return NextResponse.json({ username: validUserCredentials.email });
}
