import { createPinia } from 'pinia'
import { App } from 'vue'
export * from './modules'

export function setupPinia(app: App) {
    const pinia = createPinia()
    app.use(pinia)
}
