import {
  MESSAGE_RECEIVED,
  MESSAGE_SENT,
  READ,
  UNREAD
} from '../constants/common';
import {
  CONNECTED,
  DISCONNECTED,
  UPDATE_MESSAGES_STATUS
} from '../constants/action-types';

const initialState = {
  isLoading: false,
  isError: false,
  messages: [],
  connected: false
};

/**
 * Settings reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case CONNECTED: {
      return {
        ...state,
        connected: true
      }
    }
    case DISCONNECTED: {
      return {
        ...state,
        connected: false
      }
    }
    case MESSAGE_RECEIVED: {
      const newMessage = {
        ...action
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    }

    case MESSAGE_SENT: {
      const newMessage = {
        ...action,
        status: READ
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    }

    case UPDATE_MESSAGES_STATUS: {
      return {
        ...state,
        messages: state.messages.map(item => ({ ...item, status: READ }))
      }
    }
    default:
      return state;
  }
}
