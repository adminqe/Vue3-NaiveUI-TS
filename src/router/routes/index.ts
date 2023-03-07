import { Home } from '@vicons/carbon'
const rootRoute: PageRoute.Route = {
    name: 'root',
    path: '/',
    meta: {
        title: '首页',
        label: '首页label',
        icon: Home,
    },
}

const pageRoute: PageRoute.Route[] = [
    {
        name: 'about',
        meta: {
            title: '关于',
        },
    },
    {
        name: 'my',
        meta: {
            title: '我的',
        },
    },
]

export const routes: PageRoute.Route[] = [
    /* 页面路由 */
    Object.assign(rootRoute, { children: pageRoute }),
    /* login or more */
]
