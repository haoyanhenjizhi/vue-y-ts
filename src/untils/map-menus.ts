import { RouteRecordRaw } from 'vue-router'

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []
  //1.先去加载默认所有的routes

  const allRoutes: RouteRecordRaw[] = []
  const routeFiles = require.context('../router/main', true, /\.ts/) //webpack方法 读取路径
  routeFiles.keys().forEach((key) => {
    const route = require('../router/main' + key.split('.')[1]) //路径拼接
    allRoutes.push(route.default)
  })
  //2.根据菜单获取需要添加的routes
  //使用递归函数查找对应的菜单 需要type===2才存放到routes数组当中
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) routes.push(route)
      } else {
        _recurseGetRoute(menu.children)
      }
    }
  }
  _recurseGetRoute(userMenus)
  return routes
}