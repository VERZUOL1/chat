const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

const allClients = [];
io.on('connection', function(socket){
  console.log('an user connected');
  // console.log(socket)
  allClients.push(socket);

  socket.on('disconnect', function () {
    console.log('an user disconnected');

    const i = allClients.indexOf(socket);
    allClients.splice(i, 1)
  });

  socket.on('message', message => {
    console.log('Got message ', message );
    socket.broadcast.emit('message', message);
  });

});


http.listen(3005, function(){
  console.log('listening on *:3005');
});