import { Server } from 'socket.io';

export default function injectSocketIO(server) {
	const io = new Server(server);

	io.on('connection', (socket) => {
		socket.on('newMessage', (room_id) => {
			io.emit('reloadPage', room_id);
		});
	});
}
