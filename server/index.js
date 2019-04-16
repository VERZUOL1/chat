const express = require('express');
const socketIo = require('socket.io');
const path = require('path');

// define port, on Heroku env it will be assigned automatically
const port = process.env.PORT || 3005;

// Initialize app
const app = express();

// Serve static files on production deployment
if (process.env.NODE_ENV === 'production') {
  app
    .use(express.static(path.join(__dirname, '..', 'build')))
    .get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'build/index.html')) )
}

// Initialize socketIo module
const io = socketIo(app);

// Define socketIo events
const allClients = [];
io.on('connection', socket => {
  console.log('New user connected to chat');
  allClients.push(socket);

  socket.on('disconnect', () => {
    console.log('User was disconnected');

    const i = allClients.indexOf(socket);
    allClients.splice(i, 1)
  });

  socket.on('message', message => {
    console.log('Got message: ', message );
    socket.broadcast.emit('message', message);
  });
});

app.listen(port, () => console.log(`Chat application is listening on port: ${port}`));