import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { User } from './auth-slice';

interface CommentWithUser {
  user?: User;
}

export interface Comment extends CommentWithUser {
  id: number;
  postId: number;
  userId: number;
  content: string;
}

const initialState: Comment[] = [
  {
    id: 1,
    content: 'Test comment 1',
    postId: 1,
    userId: 2,
  },
];

export const commentsSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    setComments: (_, { payload: comments }: { payload: Comment[] }) => {
      return [...comments];
    },
  },
});

export const { setComments } = commentsSlice.actions;

export default commentsSlice.reducer;
