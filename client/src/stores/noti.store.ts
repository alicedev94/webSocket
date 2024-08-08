import { defineStore } from 'pinia'
import type { Notification }  from '../interfaces/notications'
import { getNoti } from '@/composables/notifications/httpRequets';
import { socket } from '@/composables/notifications/socketRequest';

export const useNotiStore = defineStore ('noti', {
    state: () => ({
        notifications: [] as Notification[],
        pruebas: "Variable de pruebas"
    }),
    actions: {
        async find() {
            // Obtener notificaciones 
            const { data } = await getNoti();
            // Sctualizar el estado global
            this.notifications.push(data);
        },
        modificarInput (valor: string) {
            this.pruebas = valor;
        },
        latestNoti () {
            socket.emit('latestNoti', 'Gte Tienda te ha asignado una nueva comanda.');
        }
    }
})