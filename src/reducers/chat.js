const initialState = {
  isLoading: false,
  isError: false,
  messages: []
};

/**
 * Settings reducer
 */
export default function (state = initialState, action) {
  switch (action.type) {
    case 'MESSAGE_RECEIVED': {
      const newMessage = {
        status: 'UNREAD',
        ...action
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    }

    case 'MESSAGE_SENT': {
      const newMessage = {
        ...action,
        status: 'READ'
      };
      return {
        ...state,
        messages: [...state.messages, newMessage]
      }
    }

    case 'UPDATE_MESSAGES_STATUS': {
      return {
        ...state,
        messages: state.messages.map(item => ({ ...item, status: 'READ' }))
      }
    }
    default:
      return state;
  }
}
