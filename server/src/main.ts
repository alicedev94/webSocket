import { app, io, portRes } from "./app/app";
import { router } from "./routes/main";

// RestApi
app.use('/api/ts/v1/', router);

// WebSocket
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.emit('hello', 'world');
});

app.listen(portRes, () => {
    console.log(`Listen port: ${portRes}`);
});