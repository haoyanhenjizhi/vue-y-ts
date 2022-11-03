import { ILoginState } from '../login/types'
export interface IRootStore {
  name: string
  age: number
}

export interface IRootWithMoudle {
  login: ILoginState
}

export type IStoreType = IRootStore & IRootWithMoudle //交叉类型
