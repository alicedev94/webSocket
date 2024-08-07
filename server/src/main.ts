import { app, io, portRes } from "./app/app";
import { router } from "./routes/main";
import cors from 'cors';

// Settings
app.use(cors());

// RestApi
app.use('/api/ts/v1/', router);

// WebSocket
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('hello', 'world');
});

// Start the REST API server
app.listen(portRes, () => {
    console.log(`REST API server listening on port: ${portRes}`);
});
