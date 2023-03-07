<template>
    <NaiveProvide>
        <NMenu :options="menuStore.menu" />
        <RouterView />
    </NaiveProvide>
</template>

<script setup lang="ts">
import { NMenu } from 'naive-ui'
import { useMenuStore } from './store/modules/menu'

const menuStore = useMenuStore()
</script>

<style scoped></style>
