import { createStore } from 'zustand/vanilla';
import { nanoid } from 'nanoid';

export enum TaskStatus {
  IDLE = 'IDLE',
  COMPLETED = 'COMPLETED',
}

export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  description: string;
  estimate: number;
  ctime: number;
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

export interface EditListFields extends AddNewListFields {
  id: string;
}

export interface AddNewTaskFormFields {
  listId: string;
  title: string;
  description: string;
  estimate: number;
}

export type TaskListActions = {
  addList: (fields: AddNewListFields) => void;
  removeListFromStore: (id: string) => void;
  editList: (fields: EditListFields) => void;

  getList: (id: string) => TaskList;

  addTaskToList: (data: AddNewTaskFormFields) => void;
  editTask: (data: Partial<AddNewTaskFormFields> & { id: string; status: TaskStatus }) => void;
  removeTask: (taskListId: string, taskId: string) => void;
};

export type TasksListStore = TasksListState & TaskListActions;

export const defaultInitState: TasksListState = {
  lists: [],
};

export const createTasksListStore = (initState: TasksListState = defaultInitState) => {
  return createStore<TasksListStore>()((set, get) => ({
    ...initState,
    addList: (data) =>
      set((state) => ({ lists: [{ id: nanoid(), ...data, tasks: [] }, ...state.lists] })),

    removeListFromStore: (id) =>
      set((state) => ({ lists: state.lists.filter((item) => item.id !== id) })),

    editList: (data) =>
      set((state) => ({
        lists: state.lists.map((list) => (list.id === data.id ? { ...list, ...data } : list)),
      })),

    getList: (id) => {
      const currentState = get();
      const list = currentState.lists.find((list) => list.id === id);

      if (!list) {
        throw new Error(`List with id ${id} not found`);
      }

      return list;
    },

    addTaskToList: ({ listId, ...data }) =>
      set((state) => {
        const currentList = state.lists.find((list) => list.id === listId);

        if (!currentList) return state; // защита от null

        const newTask: Task = {
          id: nanoid(),
          title: data.title,
          description: data.description,
          estimate: data.estimate,
          status: TaskStatus.IDLE,
          ctime: Date.now(),
        };

        return {
          ...state,
          lists: state.lists.map((list) =>
            list.id === listId ? { ...list, tasks: [...list.tasks, newTask] } : list,
          ),
        };
      }),

    editTask: ({ listId, id, ...data }) =>
      set((state) => {
        const currentList = state.lists.find((list) => list.id === listId);

        if (!currentList) return state;

        const currentTask = currentList.tasks.find((task) => task.id === id);

        if (!currentTask) return state;

        return {
          ...state,
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.map((task) => (task.id === id ? { ...task, ...data } : task)),
                }
              : list,
          ),
        };
      }),

    removeTask: (listId, taskId) =>
      set((state) => {
        const currentList = state.lists.find((list) => list.id === listId);

        if (!currentList) return state;

        return {
          ...state,
          lists: state.lists.map((list) =>
            list.id === listId
              ? {
                  ...list,
                  tasks: list.tasks.filter((task) => task.id !== taskId),
                }
              : list,
          ),
        };
      }),
  }));
};
