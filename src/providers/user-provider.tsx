'use client';

import React, { ReactNode } from 'react';
import { useInitializeUser } from '@/app/(auth)/hooks/use-initialize-user';

export const UserProvider = ({ children }: { children: ReactNode }) => {
  useInitializeUser();
  return <>{children}</>;
};
