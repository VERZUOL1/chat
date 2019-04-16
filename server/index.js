const http = require('http');
const nodeStatic = require('node-static');
const socketio = require('socket.io');

const config = {
  options: {
    cache: 3600,
    gzip: true
  },
  port: 3005,
  realm: 'Private',
  root: '../build',
};

function server(config) {
  const file = new nodeStatic.Server(config.root, config.options);
  const port = config.port;
  const httpServer = http.createServer((req, res) => {
    req.addListener('end', () => {
      file.serve(req, res, e => {
        if (e && (e.status === 404)) {
          file.serveFile('./index.html', 200, {}, req, res);
        }
      });
    })
      .resume();
  })
    .listen(port);

  const io = socketio(httpServer);

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
}

server(config);