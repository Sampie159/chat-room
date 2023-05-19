import { io } from 'socket.io-client';

const endpoint = 'http://localhost:3000';

export const socket = io(endpoint);
