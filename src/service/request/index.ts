import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig } from 'axios'

//定义一个接口
interface HYRequestInterceptors {
  requsetInterceptors: (config: AxiosRequestConfig) => AxiosRequestConfig
}
class HYRequest {
  instance: AxiosInstance
  constructor(config: AxiosRequestConfig) {
    this.instance = axios.create(config)
    this.instance.interceptors.request.use()
  }
  //根据不同的url创建不同的url实例
  requset(config: AxiosRequestConfig): void {
    this.instance.request(config).then((res) => {
      console.log(res)
    })
  }
}

export default HYRequest
