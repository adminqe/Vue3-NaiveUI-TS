<template>
    <NConfigProvider :locale="zhCN" :date-locale="dateZhCN" class="w-full h-full">
        <NLoadingBarProvider>
            <NMessageProvider>
                <NDialogProvider>
                    <slot />
                    <NaiveProviderContent />
                </NDialogProvider>
            </NMessageProvider>
        </NLoadingBarProvider>
    </NConfigProvider>
</template>

<script setup lang="ts">
import { zhCN, dateZhCN } from 'naive-ui'

// 挂载naive组件的方法至window, 以便在路由钩子函数和请求函数里面调用
function registerNaiveTools() {
    window.$loadingBar = useLoadingBar()
    window.$dialog = useDialog()
    window.$message = useMessage()
}

const NaiveProviderContent = defineComponent({
    name: 'NaiveProviderContent',
    setup() {
        registerNaiveTools()
    },
    render() {
        return h('div')
    },
})
</script>

<style scoped></style>
