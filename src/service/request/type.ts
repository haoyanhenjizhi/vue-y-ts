import type { AxiosRequestConfig, AxiosResponse } from 'axios'

//定义一个接口
export interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig //请求成功的接口
  requestInterceptorCatch?: (error: any) => any //请求失败的接口
  responseInterceptor?: (res: T) => T //响应成功的接口
  responseInterceptorCatch?: (err: any) => any //响应失败的接口
}
export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}
