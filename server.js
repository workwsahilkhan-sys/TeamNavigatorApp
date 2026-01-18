const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
app.use(cors());

const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

let users = {};
let messages = [];

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('join', (data) => {
    users[socket.id] = data;
    socket.broadcast.emit('userJoined', data);
  });

  socket.on('location', (data) => {
    users[socket.id] = { ...users[socket.id], location: data };
    socket.broadcast.emit('locationUpdate', { id: socket.id, ...data });
  });

  socket.on('message', (data) => {
    messages.push(data);
    socket.broadcast.emit('message', data);
  });

  socket.on('waypoint', (data) => {
    socket.broadcast.emit('waypoint', data);
  });

  socket.on('disconnect', () => {
    delete users[socket.id];
    socket.broadcast.emit('userLeft', socket.id);
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
