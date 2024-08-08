import { app, io, portRes } from "./app/app";
import { notifications } from "./models/noti.model";
import { router } from "./routes/main";
import cors from 'cors';

// Settings
app.use(cors());

// RestApi
app.use('/api/ts/v1/', router);

// WebSocket
io.on('connection', (socket) => {
    console.log('a user connected');
    
    // consulta constante a la base de datos
    // setInterval(()=> {
    //      socket.emit('updateState', notifications);
    // }, 1000);
   
    // escucha en tiempo real por eventos
    socket.on('latestNoti', (payload)=> {
        console.log('Me acaban de decir: ',payload);
        socket.emit('updateState', notifications);
    });

    socket.on('disconnect', () => {
        console.log('a user disconnect');
    });
});

// Start the REST API server
app.listen(portRes, () => {
    console.log(`REST API server listening on port: ${portRes}`);
});
