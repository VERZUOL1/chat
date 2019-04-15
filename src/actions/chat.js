import {
  SEND_MESSAGE,
  SOCKET_CONNECT,
  SOCKET_DISCONNECT,
  UPDATE_MESSAGES_STATUS
} from '../constants/action-types';
/**
 * Initialize socket connection
 * @returns {{type: string}}
 */
export function connectToChat() {
  return {
    type: SOCKET_CONNECT
  }
}

/**
 * Disconnect from chat on app exit
 * @returns {{type: string}}
 */
export function disconnectFromChat() {
  return {
    type: SOCKET_DISCONNECT
  }
}

/**
 * Send message to chat
 * @param message
 * @returns {{payload: *, type: string}}
 */
export function sendMessage(message) {
  return {
    type: SEND_MESSAGE,
    payload: message
  }
}

/**
 * Updates messages read/unread status
 * @returns {{type: string}}
 */
export function updateMessagesStatus() {
  return {
    type: UPDATE_MESSAGES_STATUS
  }
}