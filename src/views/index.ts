/**
 * @author Run
 * @time 2023-03-06 16:15:18
 * @description 所有视图需在此注册, 新增views文件在Views类型里添加
 */

export const views: PageRoute.Views = {
    root: () => import('./index.vue'),
    about: () => import('./about/index.vue'),
    my: () => import('./my/index.vue'),
}

export const viewsKeys = Object.keys(views)
