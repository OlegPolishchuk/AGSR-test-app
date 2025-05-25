'use client';

import React from 'react';
import { Typography } from '@/shared/components/ui/typography';
import { useUserStore } from '@/providers/user-store-provider';
import { IconLogoutDark } from '@/shared/components/icons/icon-logout-dark';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/shared/constants/routes';
import { Skeleton } from '@/shared/components/ui/skeleton';
import { Button } from '@/shared/components/ui/button';

export const UserData = () => {
  const router = useRouter();

  const { removeFromStore, username } = useUserStore((state) => state);

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', {
        method: 'GET',
      });

      router.push(ROUTES.login);
      removeFromStore();
    } catch (error) {
      toast.error(`Something went wrong with me => ${error}`);
    }
  };

  return (
    <div className={'ml-auto flex items-center gap-4'}>
      {username ? (
        <Typography variant={'headline-3-medium'}>{username}</Typography>
      ) : (
        <Skeleton className={'w-[120px] h-[18px] rounded-sm'} />
      )}

      <Button variant={'ghost'} onClick={handleLogout}>
        <IconLogoutDark className={'rotate-180 cursor-pointer'} />
      </Button>
    </div>
  );
};
