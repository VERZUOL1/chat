export function connectToChat() {
  return {
    type: 'SOCKET_CONNECT'
  }
}

export function disconnectFromChat() {
  return {
    type: 'SOCKET_DISCONNECT'
  }
}

export function sendMessage(message) {
  return {
    type: 'SEND_MESSAGE',
    payload: message
  }
}

export function updateMessagesStatus() {
  return {
    type: 'UPDATE_MESSAGES_STATUS'
  }
}