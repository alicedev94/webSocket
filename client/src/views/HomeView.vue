<script setup lang="ts">

type notify = {
    userCrea: string,
    idUser: number
}
let notificationList: notify[] = [];
notificationList.push({ userCrea: "Alicedev94", idUser: 2024 })

console.log(notificationList);
</script>

<template>
    <div>
        <h1>Notify</h1>
        <div class="container">
            <p v-for="item in notificationList">
                {{ item.idUser }},
                {{ item.userCrea }}
            </p>
        </div>
    </div>
</template>
