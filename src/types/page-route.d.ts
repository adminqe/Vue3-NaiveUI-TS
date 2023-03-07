declare namespace PageRoute {
    type RouteComponent = import('vue-router').RouteComponent

    type ViewName = 'root' | 'about' | 'my'

    type Views = {
        [key: string]: RouteComponent
    }

    type Route = {
        name: ViewName
        /* 一般根据name分配同名path，需要自定义path时可传 */
        path?: string
        redirect?: ViewName
        children?: Route[]
        meta: RouteMeta
    }

    type RouteMeta = {
        /* document.title  */
        title: string
        /* 菜单标题，无则取title */
        label?: string
        /* 菜单icon */
        icon?: Component
        /** 缓存页面 */
        keepAlive?: boolean
        /** 是否在菜单中隐藏(一些列表、表格的详情页面需要通过参数跳转，所以不能显示在菜单中) */
        hide?: boolean
    }
}
