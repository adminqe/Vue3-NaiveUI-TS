import { Router } from 'vue-router'

export const createRouterGuard = (router: Router) => {
    router.beforeEach(to => {
        window.$loadingBar?.start()
    })

    router.afterEach(to => {
        window.$loadingBar?.finish()
    })
}
