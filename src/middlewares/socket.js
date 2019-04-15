import io from 'socket.io-client';
import { DateTime } from 'luxon';
import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  SEND_MESSAGE
} from '../constants/action-types';
import {
  MESSAGE_RECEIVED,
  MESSAGE_SENT
} from '../constants/common';
import { SERVER_API_ADDRESS } from '../constants/end-points';

/**
 * Socket.io middleware
 * It connect/disconnect from chat
 * send message to users
 *
 */
const socketMiddleware = ({ dispatch, getState }) => {
  let socket = null;
  return next => action => {
    const username = getState().settings.username;
    const dateTime = DateTime.local();

    switch (action.type) {
      case SOCKET_CONNECT: {
        socket = io(SERVER_API_ADDRESS);
        socket.on('message', data => {
          dispatch({
            type: MESSAGE_RECEIVED,
            ...data,
            dateTime: new DateTime(data.dateTime)
          })
        });

        break;
      }
      case SOCKET_DISCONNECT: {
        socket.emit('disconnect');
        socket.disconnect();
        break;
      }
      case SEND_MESSAGE: {
        const newMessage = {
          dateTime,
          username,
          message: action.payload
        };
        socket.emit('message', newMessage);

        dispatch({
          type: MESSAGE_SENT,
          ...newMessage
        });
        break;
      }

      default:
        break;

    }

    return next(action);
  };
};

export default socketMiddleware;
