import { Typography } from '@/shared/components/ui/typography';
import { Button } from '@/shared/components/ui/button';
import Link from 'next/link';
import { ROUTES } from '@/shared/constants/routes';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center'>
      <div className={'text-center mb-3'}>
        <Typography tag={'h1'} variant={'headline-1'}>
          Welcome
        </Typography>
        <Typography variant={'body-m-regular'}>You are not authorised</Typography>
      </div>

      <Button asChild>
        <Link href={ROUTES.login}>Login</Link>
      </Button>
    </div>
  );
}
