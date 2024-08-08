import { useNotiStore } from "@/stores/noti.store";

export const sendComand = () => {
    const notiStore = useNotiStore();
    notiStore.latestNoti();
};