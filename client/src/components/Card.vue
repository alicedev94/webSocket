<script setup lang="ts">
import type { Notification } from '@/interfaces/notications';

defineProps<{
    notification: Notification[];
}>()
</script>

<template>
    <div class="card">
        <table>
            <thead> <!-- cabecera  -->
                <tr> <!-- fila -->
                    <th> <!-- columna  -->
                        RECIPIET
                    </th>
                    <th>
                        SENDER
                    </th>
                    <th>
                        MESSAGE
                    </th>
                    <th>
                        DATE
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in notification[0]" :key="item.sender">
                    <td>
                        {{ item.recipient }}
                    </td>
                    <td>
                        {{ item.sender }}
                    </td>
                    <td>
                        {{ item.message }}
                    </td>
                    <td>
                        {{ item.date }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.card {
    border: 2px solid;
    padding: 10px;
}

th {
    padding: 5px;
    font-weight: bold;
    font-size: 28px;
    border-right: 2px solid;
    border-bottom: 2px solid;
}

tfoot {
    width: 100%;
    background-color: aqua;
}
</style>