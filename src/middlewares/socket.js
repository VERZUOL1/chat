import io from 'socket.io-client';
import { DateTime } from 'luxon';
/**
 * Socket.io middleware
 */
const socketMiddleware = ({ dispatch, getState }) => {
  let socket = null;
  return next => action => {
    const username = getState().settings.username;
    const dateTime = DateTime.local();

    switch (action.type) {
      case 'SOCKET_CONNECT': {
        socket = io('http://localhost:3005');
        socket.on('message', data => {
          dispatch({
            type: 'MESSAGE_RECEIVED',
            ...data
          })
        });

        break;
      }
      case 'SOCKET_DISCONNECT': {
        socket.emit('disconnect');
        socket.disconnect();
        break;
      }
      case 'SEND_MESSAGE': {
        const newMessage = {
          dateTime,
          username,
          message: action.payload
        };
        socket.emit('message', newMessage);

        dispatch({
          type: 'MESSAGE_SENT',
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
