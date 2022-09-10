import { createSlice } from '@reduxjs/toolkit';

interface PostWithComments {
  comments?: Comment[];
}

export interface Post extends PostWithComments {
  id: number;
  imgUrl: string;
  content: string;
}

const initialState: Post[] = [
  {
    id: 1,
    content: 'Test Post 1',
    imgUrl: 'http://example.com',
  },
];

export const postsSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    setPosts: (_, { payload: posts }: { payload: Post[] }) => {
      return [...posts];
    },
  },
});

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
