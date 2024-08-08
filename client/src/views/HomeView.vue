<script setup lang="ts">
import { ref, watch } from 'vue';
import Card from '@/components/Card.vue';
import type { Notification } from '@/interfaces/notications';
import { sendComand } from '@/composables/notifications/socketEmit';
import { useNotiStore } from '@/stores/noti.store';

const notiStore = useNotiStore();
const localNotifications = ref<Notification[]>([]);

watch(notiStore.notifications, () => {
    localNotifications.value = [...notiStore.notifications];
});
</script>

<template>
    <div>
        <h1>GTE. TIENDA</h1>
        <button @click="sendComand">Enviar solicitud..</button>
    </div>
    <div>
        <p>{{ notiStore.pruebas }}</p>
        <Card :notification="localNotifications" />
    </div>
</template>
