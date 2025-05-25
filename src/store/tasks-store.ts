import { createStore } from 'zustand/vanilla';
import { nanoid } from 'nanoid';

export type TaskStatus = 'completed' | 'idle';

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

export interface TaskList {
  id: string;
  title: string;
  description?: string;
  tasks: Task[];
}

export interface TasksListState {
  lists: TaskList[];
}

export interface AddNewListFields {
  title: string;
  description?: string;
}

export type TaskListActions = {
  addList: ({ title, description }: AddNewListFields) => void;
  removeListFromStore: (id: string) => void;
};

export type TasksListStore = TasksListState & TaskListActions;

export const defaultInitState: TasksListState = {
  lists: [],
};

export const createTasksListStore = (initState: TasksListState = defaultInitState) => {
  return createStore<TasksListStore>()((set) => ({
    ...initState,
    addList: (data) =>
      set((state) => ({ lists: [{ id: nanoid(), ...data, tasks: [] }, ...state.lists] })),
    removeListFromStore: (id) =>
      set((state) => ({ lists: state.lists.filter((item) => item.id === id) })),
  }));
};
