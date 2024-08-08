import { useNotiStore } from "@/stores/noti.store";
import { io } from "socket.io-client";

export const socket = io("ws://localhost:3001");

socket.on('updateState', (latestNoti) => {
    const notiStore = useNotiStore();
    if (Array.isArray(latestNoti)) {
        // notiStore.notifications.length = 0;

        latestNoti.forEach((notification)=> {
            notiStore.notifications.push(notification);
        });
    }
});




