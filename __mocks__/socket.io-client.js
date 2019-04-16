'use strict';

// const io = jest.genMockFromModule('socket.io-client');

const io = (address) => {
  return {
    on: () => {},
    emit: () => {},
    connected: true
  }
};

module.exports = io;