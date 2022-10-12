import create from 'zustand';

export interface UserDetailsState {
  token: string;
  userId: string;
  setToken: (token: string) => void;
  setUserId: (userId: string) => void;
}

const useUserDetailsStore = create<UserDetailsState>((set) => ({
  token: '',
  userId: '',
  setToken: (newToken) => set(() => ({ token: newToken })),
  setUserId: (newUserId) => set(() => ({ userId: newUserId })),
}));

export default useUserDetailsStore;
