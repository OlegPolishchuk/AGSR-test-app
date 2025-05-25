import React, { ReactNode } from 'react';
import { UserStoreProvider } from '@/providers/user-store-provider';
import { TasksListStoreProvider } from '@/providers/tasks-list-provider';

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  return (
    <UserStoreProvider>
      <TasksListStoreProvider>{children}</TasksListStoreProvider>
    </UserStoreProvider>
  );
};
