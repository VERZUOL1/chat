import { createSelector } from 'reselect';

export const getMessages = state => state.chat.messages;

const getUnreadMessagesCount = createSelector(
  getMessages,
  messages => messages.filter(item => item.status === 'UNREAD').length,
);

export default getUnreadMessagesCount;
