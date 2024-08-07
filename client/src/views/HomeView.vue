<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Card from '@/components/Card.vue'
import { useNotiStore } from '@/stores/noti.store'
import type { Notification } from '@/interfaces/notications';

const localNotifications = ref<Notification[]>([]);

// Carga inicial de la app
onMounted(async () => {
    const notiStore = useNotiStore();
    await notiStore.find();
    localNotifications.value = notiStore.notifications;
})
</script>

<template>
    <div>
        <Card :notification="localNotifications" />
    </div>
</template>

<style scoped></style>
