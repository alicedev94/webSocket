import express from 'express';
import { createServer } from "http";
import { Server } from 'socket.io';

export let portRes: string = '3000';
export let portSocket: number = 3001;

// RestApi
export const app = express();

// WebSocket
const httpServer = createServer();
export const io = new Server(httpServer, {
    cors: {
        origin: '*', // Corrected: Added quotes around '*'
    }
});

// Start the WebSocket server
httpServer.listen(portSocket, () => {
    console.log(`WebSocket server listening on port ${portSocket}`);
});
