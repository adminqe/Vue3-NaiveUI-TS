<template>
    <div class="space-x-6 flex justify-center">
        <NButton @click="$router_push('about')">去往about</NButton>
        <NButton @click="$router_push('my')">去往my</NButton>
        <div class="border-2 border-emerald-500 w-28 h-28">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang="ts">
import { NButton } from 'naive-ui'
</script>

<style scoped></style>
