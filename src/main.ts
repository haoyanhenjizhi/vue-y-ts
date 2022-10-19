import { createApp } from 'vue'

//这里是全局引入element-plus的方式
// import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/base.css'

//局部引入 element-plus
import { globalRegister } from './global'
import App from './App.vue'
import './service/axios_demo'
import router from './router'
import store from './store'

const app = createApp(App)

// 注册element-plus/其他
//app.use 如果是传入函数那么默认传过来就是APP 如果是传入一个对象那么默认执行install方法
app.use(router)
app.use(store)
app.use(globalRegister) //引入局部注册相关模块进行调用
app.mount('#app')
console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)
