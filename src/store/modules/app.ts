import { defineStore } from 'pinia'

export const useAppStore = defineStore('appStore', () => {
    /* do something */
    const count = ref(1)

    const increment = () => {
        count.value++
    }

    return { count, increment }
})
