import { App } from 'vue'
import { routerPlugin } from './router'
import '../styles/index.css'

export function setupPlugins(app: App) {
    app.use(routerPlugin)
}
