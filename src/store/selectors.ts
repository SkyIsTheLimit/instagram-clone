import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '@store/index';

const getComments = (state: RootState) => state.comments;
const getPosts = (state: RootState) => state.posts;
const getUsers = (state: RootState) => state.users;

export const getCommentsWithUserData = createSelector(
  getComments,
  getUsers,
  (comments, users) =>
    comments.map((comment) => ({
      ...comment,
      user: users.find((user) => user.id === comment.userId),
    }))
);

export const getPostsWithComments = createSelector(
  getCommentsWithUserData,
  getPosts,
  (comments, posts) =>
    posts.map((post) => {
      const _comments = comments.filter(
        (comment) => comment.postId === post.id
      );

      return {
        ...post,
        comments: _comments || [],
      };
    })
);
