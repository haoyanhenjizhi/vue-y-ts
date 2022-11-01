import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import localCache from '@/untils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('@/views/main/main.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  //路由导航 如果没有登录 跳到登录页面
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (token) {
      return '/login'
    }
  }
})

export default router
