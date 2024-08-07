import { defineStore } from 'pinia'
import type { Notification }  from '../interfaces/notications'
import { getNoti } from '@/composables/notifications/httpRequets';

export const useNotiStore = defineStore ('noti', {
    state: () => ({
        notifications: [] as Notification[]
    }),
    actions: {
        async find() {
            // Obtener notificaciones 
            const { data } = await getNoti();

            // Sctualizar el estado global
            this.notifications.push(data);
        }
    }
})