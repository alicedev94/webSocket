<script setup lang="ts">
import { useNotiStore } from '@/stores/noti.store';

const state = useNotiStore();
console.log(state.notifications);

</script>

<template>
    <div>
        <h1>{{ state.notifications }}</h1>
    </div>
</template>