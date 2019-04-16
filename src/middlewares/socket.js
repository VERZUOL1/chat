import io from 'socket.io-client';
import { DateTime } from 'luxon';
import {
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  SEND_MESSAGE,
  CONNECTED,
  DISCONNECTED
} from '../constants/action-types';
import {
  MESSAGE_RECEIVED,
  MESSAGE_SENT,
  UNREAD,
  READ
} from '../constants/common';
import { SERVER_API_ADDRESS } from '../constants/end-points';

let socket = null;
/**
 * Socket.io middleware
 * It connect/disconnect from chat
 * send message to users
 *
 */
const socketMiddleware = ({ dispatch, getState }) => {
  return next => action => {
    const username = getState().settings.username;
    const dateTime = DateTime.local();

    switch (action.type) {
      case SOCKET_CONNECT: {
        socket = io(SERVER_API_ADDRESS);
        socket.on('connect', () => {
          if (socket && socket.connected) {
            dispatch({
              type: CONNECTED
            })
          }
        });
        socket.on('disconnect', () => {
          if (socket && socket.disconnected && getState().chat.connected) {
            dispatch({
              type: DISCONNECTED
            });
          }
        });
        socket.on('message', data => {
          const pathname = getState().router.location.pathname;
          dispatch({
            type: MESSAGE_RECEIVED,
            ...data,
            status: pathname !== '/' ? UNREAD : READ,
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
