import { app, io, portRes } from "./app/app";
import { router } from "./routes/main";
import cors from 'cors';

//settings
app.use(cors());

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