import React from 'react';
import { Typography } from '@/shared/components/ui/typography';
import { Button } from '@/shared/components/ui/button';
import { ROUTES } from '@/shared/constants/routes';
import { useRouter } from 'next/navigation';

export const NothingToShow = () => {
  const router = useRouter();

  return (
    <>
      <Typography
        variant={'headline-3-medium'}
        className={'w-[80%] max-w-[500px] text-center mx-auto'}
      >
        Oops! Data is lost because this app stores everything in memory only. Please avoid
        refreshing the page — try navigating through the app instead.
      </Typography>

      <Button onClick={() => router.push(ROUTES.main)} className={'w-fit mx-auto'}>
        Back
      </Button>
    </>
  );
};
