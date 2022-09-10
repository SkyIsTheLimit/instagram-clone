import { createSlice } from '@reduxjs/toolkit';
import { User } from './auth-slice';

interface MessageWithUserData {
  fromUser?: User;
  toUser?: User;
}

export interface Message extends MessageWithUserData {
  id: number;
  fromUserId: number;
  toUserId: number;
  content: string;
}

const initialState: Message[] = [
  {
    id: 1,
    content: 'Test message 1',
    fromUserId: 2,
    toUserId: 1,
  },
];

export const messagesSlice = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    setMessages: (_, { payload: messages }: { payload: Message[] }) => {
      return [...messages];
    },
  },
});

export const { setMessages } = messagesSlice.actions;

export default messagesSlice.reducer;
