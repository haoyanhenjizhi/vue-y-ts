import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootStore } from '../type/types'

import { accountLoginReuest } from '@/service/login/login'
import { IAccount } from '@/service/login/type'
const LoginMoudle: Module<ILoginState, IRootStore> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  actions: {
    async accountLoginAction({ commit }, payload: IAccount) {
      //1.实现登录逻辑
      const loginResult = await accountLoginReuest(payload)
      console.log(loginResult)
    },
    phoneLoginAction({ commit }, payload: any) {
      console.log('手机登录', payload)
    }
  }
}

export default LoginMoudle
