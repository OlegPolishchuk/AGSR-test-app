import { LoginForm } from '@/app/(auth)/login/components/login-form';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <LoginForm />
    </div>
  );
}
