import { Server } from 'socket.io';

export default function injectSocketIO(server) {
	const io = new Server(server);

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
}
