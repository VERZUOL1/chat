import * as ActionTypes from '../constants/action-types';
import * as actions from './chat';

it('create action to connect to chat', () => {
  const expectedAction = {
    type: ActionTypes.SOCKET_CONNECT
  };
  expect(actions.connectToChat()).toEqual(expectedAction);
});

it('create action to disconnect from chat', () => {
  const expectedAction = {
    type: ActionTypes.SOCKET_DISCONNECT
  };
  expect(actions.disconnectFromChat()).toEqual(expectedAction);
});

it('create action to send a message', () => {
  const expectedAction = {
    type: ActionTypes.SEND_MESSAGE,
    payload: 'test'
  };
  expect(actions.sendMessage('test')).toEqual(expectedAction);
});

it('create action to update meesages status', () => {
  const expectedAction = {
    type: ActionTypes.UPDATE_MESSAGES_STATUS
  };
  expect(actions.updateMessagesStatus()).toEqual(expectedAction);
});