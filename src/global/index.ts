import { App } from 'vue' //类型导入
import registerElement from './register-element'
import registerProperties from './register-properties'

export function globalRegister(app: App): void {
  app.use(registerElement) //使用局部注册函数
  app.use(registerProperties)
}
