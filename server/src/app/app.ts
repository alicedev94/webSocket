import express from 'express';
import { Server } from 'socket.io';

export let portRes: string = '3000';
export let portSocket: number = 3001;

// RestApi
export const app = express();

// WebSocket
export const io = new Server(portSocket);



