import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: () => {
            return { path: '/home' }
        }
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../components/Home/Home.vue')
    },
    {
        path: '/notification',
        name: 'Notification',
        component: () => import(/* webpackChunkName: "about" */ '../components/Notification.vue')
    },
]

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes
})

export default router