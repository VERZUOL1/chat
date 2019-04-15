const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

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

http.listen(3005, function(){
  console.log('Chat app is listening on localhost:3005');
});