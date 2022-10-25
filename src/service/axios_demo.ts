// import axios from 'axios'
// axios.defaults.baseURL = 'http://httpbin.org' //全局配置
// axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
//   console.log(res)
// })
// // 1.get请求
// axios.get('/get', {
//   params: {
//     name: 'yann',
//     age: '18'
//   },
//   timeout: 1000,
//   headers: {}
// })
// // 2.post请求
// axios
//   .post('/post', {
//     data: {
//       name: 'yan',
//       age: 18
//     }
//   })
//   .then((res) => {
//     console.log(res.data)
//   })

// // 拦截器的请求
// axios.interceptors.request.use(
//   (config) => {
//     console.log('请求成功的拦截')
//     return config
//   },
//   (err) => {
//     console.log('请求发送错误')
//     console.log(err)
//   }
// )

// // 拦截器的响应
// axios.interceptors.response.use(
//   (res) => {
//     console.log('响应成功的拦截')
//     return res
//   },
//   (err) => {
//     console.log('响应失败')
//     return err
//   }
// )
