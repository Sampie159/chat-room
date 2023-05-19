import { sveltekit } from '@sveltejs/kit/vite';
import { Server } from 'socket.io';
import { defineConfig } from 'vitest/config';

export const webSocketServer = {
	name: 'webSocketServer',
	configureServer(server) {
		const io = new Server(server.httpServer);

		io.on('connect', (socket) => {
			socket.emit('eventFromServer', 'Hello World');
		});

		console.log('SocketIO injected');
	}
};

export default defineConfig({
	plugins: [sveltekit(), webSocketServer],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
