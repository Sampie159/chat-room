import { io } from 'socket.io-client';

const endpoint = 'http://localhost:5173';

export const socket = io(endpoint);
