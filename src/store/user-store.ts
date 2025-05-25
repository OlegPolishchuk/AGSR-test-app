import { createStore } from 'zustand/vanilla';

export type UserState = {
  username: string;
};

export type UserActions = {
  addToStore: (username: string) => void;
  removeFromStore: () => void;
};

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
  username: '',
};

export const createUserStore = (initState: UserState = defaultInitState) => {
  return createStore<UserStore>()((set) => ({
    ...initState,
    addToStore: (username: string) => set(() => ({ username: username })),
    removeFromStore: () => set(() => ({ username: '' })),
  }));
};
