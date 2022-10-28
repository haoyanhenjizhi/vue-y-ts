import { Module } from 'vuex'
import { ILoginState } from './types'
import { IRootStore } from '../type/types'

const LoginMoudle: Module<ILoginState, IRootStore> = {
  state() {
    return {
      token: '',
      userInfo: {}
    }
  },
  mutations: {},
  actions: {}
}

export default LoginMoudle
