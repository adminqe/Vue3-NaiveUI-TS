import { App } from 'vue'

export const routerPlugin = {
    install: (app: App) => {
        app.config.globalProperties.$router_push = (name: PageRoute.ViewName) => {
            app.config.globalProperties.$router.push({ name })
        }
    },
}
