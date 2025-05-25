import { loginSchema, sessionToken, validUserCredentials } from '@/shared/constants/auth';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const res = await request.json();

  const { error, data } = loginSchema.safeParse(res);

  if (error) {
    return Response.json({ message: 'Validation error', errors: error.format() }, { status: 400 });
  }

  if (
    data.email !== validUserCredentials.email ||
    data.password !== validUserCredentials.password
  ) {
    return Response.json({ message: 'Invalid credentials' }, { status: 401 });
  }

  const cookieStore = await cookies();
  cookieStore.set('session', sessionToken, {
    httpOnly: true,
    path: '/',
    maxAge: 60 * 60 * 24, // 1 день
    sameSite: 'lax',
  });

  return Response.json(data);
}
