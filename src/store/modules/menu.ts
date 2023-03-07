import { routes } from '@/router/routes'
import { defineStore } from 'pinia'
import { RouterLink } from 'vue-router'
import { MenuOption, NIcon } from 'naive-ui'

function renderIcon(icon?: Component): (() => VNode) | undefined {
    if (!icon) return undefined
    return () => h(NIcon, null, { default: () => h(icon) })
}

function createLabel(pageRoute: PageRoute.Route): string | (() => VNode) {
    if (pageRoute.children?.length) return pageRoute.meta.label || pageRoute.meta.title
    return () => h(RouterLink, { to: { name: pageRoute.name! } }, () => pageRoute.meta.label || pageRoute.meta.title)
}

/**
 * @author Run
 * @time 2023-03-07 09:55:30
 * @description 通过路由创建菜单
 */
function transformRoutesToMenu(routes: PageRoute.Route[]): MenuOption[] {
    return routes.map(route => ({
        key: route.name || '',
        label: createLabel(route),
        icon: renderIcon(route.meta.icon),
        children: route.children && transformRoutesToMenu(route.children),
    }))
}

export const useMenuStore = defineStore('menuStore', () => {
    const menu = ref(transformRoutesToMenu(routes))

    return { menu }
})
