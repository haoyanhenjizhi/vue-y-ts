import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { HYRequestConfig, HYRequestInterceptors } from './type' //ts封装类型
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
const DEFAULT_LOADING = false
class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance
  constructor(config: HYRequestConfig) {
    //创建实例
    this.instance = axios.create(config)
    //保存基本信息
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors
    //从config里面取出的拦截器都是对应实例的拦截器

    //使用拦截器
    this.instance.interceptors.request.use(
      //c传入请求拦截器
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      //传入响应拦截器
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )
    //添加所有实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        // console.log('所有实例都有的拦截器，请求成功')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '正在请求数据',
            background: 'rgba(0,0,0,0.2)'
          })
        }
        return config
      },
      (err) => {
        // console.log('所有实例都有的拦截器，请求失败')
        return err
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        // console.log('所有实例都有的拦截器，响应成功')
        //拿到数据之后将loading移除
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          // console.log('请求失败')
        } else {
          return data
        }
      },
      (err) => {
        // console.log('所有实例都有的拦截器，响应失败')
        if (err.response.status === 404) {
          // console.log('404错误')
        }
        return err
      }
    )
  }
  //根据不同的url创建不同的url实例
  requset<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //1. 单个请求对请求的config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }
      //2. 判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          //1.单个请求对于数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
            //这里之所以出现类型不匹配是因为传入的是AxiosResponse类型 但是需要传入T类型 所以上面要改
          }
          //2.将showloading设置为 true 不然会影响下一个请求
          this.showLoading = DEFAULT_LOADING
          //3.将请求的结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          reject(err)
        })
    })
  }
  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'GET' })
  }
  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'POST' })
  }
  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'DELETE' })
  }
  patch<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.requset<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
