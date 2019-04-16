import reducer from './chat';
import { MESSAGE_RECEIVED, MESSAGE_SENT, READ, UNREAD } from '../constants/common';
import { UPDATE_MESSAGES_STATUS, CONNECTED, DISCONNECTED } from '../constants/action-types';

const initialState = {
  isLoading: false,
  isError: false,
  messages: [],
  connected: false
};

it('returns initial state' , () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

it('handles CONNECTED action' , () => {
  expect(reducer(initialState, {
    type: CONNECTED
  })).toEqual({
    ...initialState,
    connected: true
  });
});

it('handles DISCONNECTED action' , () => {
  expect(reducer(initialState, {
    type: DISCONNECTED
  })).toEqual({
    ...initialState,
    connected: false
  });
});

it('handles MESSAGE_RECEIVED action' , () => {
  expect(reducer(initialState, {
    type: MESSAGE_RECEIVED,
    dateTime: 1,
    message: 'Test',
    username: 'Test'
  })).toEqual({
    ...initialState,
    messages: [{
      type: MESSAGE_RECEIVED,
      dateTime: 1,
      message: 'Test',
      username: 'Test'
    }]
  });
});

it('handles MESSAGE_SENT action' , () => {
  expect(reducer(initialState, {
    type: MESSAGE_SENT,
    dateTime: 1,
    message: 'Test',
    username: 'Test'
  })).toEqual({
    ...initialState,
    messages: [{
      type: MESSAGE_SENT,
      status: READ,
      dateTime: 1,
      message: 'Test',
      username: 'Test'
    }]
  });
});

it('handles UPDATE_MESSAGES_STATUS action' , () => {
  const state = {
    ...initialState,
    messages: [
      {
        type: MESSAGE_SENT,
        status: UNREAD,
        dateTime: 1,
        message: 'Test1',
        username: 'Test'
      },
      {
        type: MESSAGE_SENT,
        status: UNREAD,
        dateTime: 1,
        message: 'Test2',
        username: 'Test'
      }
    ]
  };

  expect(reducer(state, {
    type: UPDATE_MESSAGES_STATUS
  })).toEqual({
    ...initialState,
    messages: [
      {
        type: MESSAGE_SENT,
        status: READ,
        dateTime: 1,
        message: 'Test1',
        username: 'Test'
      },
      {
        type: MESSAGE_SENT,
        status: READ,
        dateTime: 1,
        message: 'Test2',
        username: 'Test'
      }
    ]
  });
});