import { createSlice } from '@reduxjs/toolkit';
import { User } from './auth-slice';

const initialState: User[] = [
  {
    id: 1,
    username: '@testuser1',
  },
  {
    id: 2,
    username: '@testuser2',
  },
];

export const usersSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    setUsers: (_, { payload: users }: { payload: User[] }) => {
      return [...users];
    },
  },
});

export const { setUsers } = usersSlice.actions;

export default usersSlice.reducer;
