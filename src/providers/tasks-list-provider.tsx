'use client';

import { type ReactNode, createContext, useRef, useContext } from 'react';
import { useStore } from 'zustand';

import { createTasksListStore, TasksListStore } from '@/store/tasks-store';

export type TasksListStoreApi = ReturnType<typeof createTasksListStore>;

export const TaskStoreContext = createContext<TasksListStoreApi | undefined>(undefined);

export interface Props {
  children: ReactNode;
}

export const TasksListStoreProvider = ({ children }: Props) => {
  const storeRef = useRef<TasksListStoreApi | null>(null);
  if (storeRef.current === null) {
    storeRef.current = createTasksListStore();
  }

  return <TaskStoreContext.Provider value={storeRef.current}>{children}</TaskStoreContext.Provider>;
};

export const useTasksListStore = <T,>(selector: (store: TasksListStore) => T): T => {
  const context = useContext(TaskStoreContext);

  if (!context) {
    throw new Error(`useTasksListStore must be used within TasksListStoreProvider`);
  }

  return useStore(context, selector);
};
