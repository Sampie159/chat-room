import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { handler } from '../build/handler.js';

const port = process.env.PORT || 3000;
const app = express();
const server = createServer(app);

const io = new Server(server, {
	cors: '0.0.0.0:' + port
});

io.on('connection', (socket) => {
	socket.on('newMessage', (message, room) => {
		socket.to(room).emit('reloadPage', message);
	});
	socket.on('joinRoom', (room) => {
		socket.join(room);
	});
	socket.on('leaveRoom', (room) => {
		socket.leave(room);
	});
});

app.use(handler);

server.listen(port, '0.0.0.0');
