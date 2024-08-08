<script setup lang="ts">
import { watch, ref } from 'vue';
import { useNotiStore } from '@/stores/noti.store';
import type { Notification } from '@/interfaces/notications';

const notiStore = useNotiStore();
const localClientData = ref<Notification[]>([]);

</script>

<template>
    <div>
        <h1>ASESOR DE TIENDAS</h1>
    </div>
    <div class="Mis notificaciones">
        <p v-if="localClientData.length === 0">Sin notificaciones</p>
        <p v-else>{{ localClientData }}</p>
        <p>{{ notiStore.pruebas }}</p>
        <input type="text" @input="notiStore.modificarInput('jklk')">
    </div>
</template>
