import HYRequest from './request'
//根据不同的baseurl封装不同的实例
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { BASE_URL, TIME_OUT } from './request/config'
export const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})
// export const hyRequest1 = new HYRequest({
//   baseURL: '地址2'
// })
