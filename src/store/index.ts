import { createStore } from 'vuex'

import { IRootStore } from './type/types'

import login from './login/login'
const store = createStore<IRootStore>({
  state: () => {
    return {
      name: 'ahao',
      age: 18
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: {
    login
  }
})
export function setupStore(): void {
  store.dispatch('login/loadLocalL')
}

export default store
