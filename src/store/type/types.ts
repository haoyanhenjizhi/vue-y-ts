import { ILoginState } from '../login/types'
import { ISystemState } from '../main/system/types'
export interface IRootStore {
  name: string
  age: number
}

export interface IRootWithMoudle {
  login: ILoginState
  system: ISystemState
}

export type IStoreType = IRootStore & IRootWithMoudle //交叉类型
