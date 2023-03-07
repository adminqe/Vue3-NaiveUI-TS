export {}

declare module 'vue' {
    interface ComponentCustomProperties {
        $router_push: (name: PageRoute.ViewName) => void
    }
}
