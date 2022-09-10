import { configureStore } from '@reduxjs/toolkit';
import auth from '@store/auth-slice';
import users from '@store/users-slice';
import posts from '@store/posts-slice';
import comments from '@store/comments-slice';
import messages from '@store/messages-slice';

const store = configureStore({
  reducer: {
    auth,
    users,
    posts,
    comments,
    messages,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
