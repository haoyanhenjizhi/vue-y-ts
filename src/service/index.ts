import HYRequest from './request'
//根据不同的baseurl封装不同的实例
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BASE_URL, TIME_OUT } from './request/config'

import localCache from '@/untils/cache'
export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    //这里这样写是为了每个实例传入不同的拦截器
    requestInterceptor: (config) => {
      // console.log('请求成功的拦截')
      const token = localCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    requestInterceptorCatch: (err) => {
      // console.log('请求失败的拦截')
      return err
    },
    responseInterceptor: (res) => {
      // console.log('响应成功的拦截')
      return res
    },
    responseInterceptorCatch(err) {
      // console.log('响应失败的拦截')
      return err
    }
  }
})
// export const hyRequest1 = new HYRequest({
//   baseURL: '地址2'
// })
