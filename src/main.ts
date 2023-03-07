import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupPinia } from '@/store'
import { setupPlugins } from '@/plugins'

import App from './App.vue'

async function bootstrap() {
    const app = createApp(App)

    setupPlugins(app)

    await setupRouter(app)

    setupPinia(app)

    app.mount('#app')
}

bootstrap()
