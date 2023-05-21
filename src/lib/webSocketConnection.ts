import { io } from 'socket.io-client';

const endpoint = '0.0.0.0' + process.env.PORT; // Railway url
// const endpoint = 'http://localhost:3000'; // production url
// const endpoint = 'http://localhost:5173'; // development url

export const socket = io(endpoint);
