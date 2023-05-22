import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { handler } from '../build/handler.js';

const port = process.env.PORT;
const app = express();
const server = createServer(app);

const io = new Server(server, {
	cors: {
		origin: '0.0.0.0:' + port
	}
});

io.on('connection', (socket) => {
	socket.on('newMessage', (message) => {
		io.emit('reloadPage', message);
	});
});

app.use(handler);

server.listen(port, '0.0.0.0');
