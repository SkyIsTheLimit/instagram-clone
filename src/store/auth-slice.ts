import { createSlice } from '@reduxjs/toolkit';

export interface User {
  id: number;
  username: string;
}

export interface AuthState {
  user?: User;
  isAuthenticated?: boolean;
}

const initialState: AuthState = {
  user: {
    id: 1,
    username: '@testuser1',
  },
  isAuthenticated: true,
};

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    setUser: (state, { payload: user }: { payload: User }) => {
      state.user = user;
      state.isAuthenticated = true;
    },

    clearUser: (state) => {
      state.user = undefined;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;

export default authSlice.reducer;
