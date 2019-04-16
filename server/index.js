const express = require('express')();
const socketIo = require('socket.io');

const server = express()
  .use((req, res) => res.sendFile('../build/index.html') )
  .listen(3005, () => console.log(`Listening on 3005`));
const io = socketIo(server);

const allClients = [];
io.on('connection', function(socket){
  console.log('New user connected to chat');
  allClients.push(socket);

  socket.on('disconnect', function () {
    console.log('User was disconnected');

    const i = allClients.indexOf(socket);
    allClients.splice(i, 1)
  });

  socket.on('message', message => {
    console.log('Got message: ', message );
    socket.broadcast.emit('message', message);
  });
});