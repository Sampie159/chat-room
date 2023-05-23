import { io } from 'socket.io-client';

const endpoint = 'https://localhost:' + process.env.PORT; // railway production url
// const endpoint = 'http://localhost:3000'; // production url
// const endpoint = 'http://localhost:5173'; // development url

export const socket = io(endpoint, { secure: true });
