import { App } from 'vue'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { createRouterGuard } from './guard'
import { routes as routesRaw } from './routes'
import { views } from '@/views'

function transformViewsToRoutes(routes: PageRoute.Route[], views: PageRoute.Views): RouteRecordRaw[] {
    return routes.map(({ name, meta, children, path = name }) => {
        const childRoutes = children && transformViewsToRoutes(children, views)
        return {
            name,
            path,
            component: views[name],
            meta,
            ...(childRoutes && { children: childRoutes }),
        }
    })
}

export async function setupRouter(app: App) {
    const routes = transformViewsToRoutes(routesRaw, views)
    const router = createRouter({
        history: createWebHistory(),
        routes,
    })
    app.use(router)
    console.log('routes=>', routes)

    createRouterGuard(router)

    await router.isReady()
}
