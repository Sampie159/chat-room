import { io } from 'socket.io-client';

const endpoint = 'http://localhost:' + process.env.PORT; // Railway url
// const endpoint = 'http://localhost:3000'; // production url
// const endpoint = 'http://localhost:5173'; // development url

export const socket = io(endpoint);
