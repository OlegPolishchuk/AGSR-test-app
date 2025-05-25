'use client';

import { useEffect } from 'react';
import {} from '@/store/user-store';
import { useUserStore } from '@/providers/user-store-provider';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/shared/constants/routes';

export const useInitializeUser = () => {
  const router = useRouter();

  const initializeFromCookie = useUserStore((state) => state.addToStore);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me');
        if (response.ok) {
          const user = await response.json();

          return initializeFromCookie(user.username);
        }
      } catch (error) {
        router.push(ROUTES.login);
        console.error('Failed to fetch user:', error);
      }
    };

    fetchUser();
  }, [initializeFromCookie]);
};
