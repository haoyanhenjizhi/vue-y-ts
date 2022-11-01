export interface IAccount {
  name: string
  password: string
}

export interface ILoginResult {
  id: number
  name: number
  token: string
}

export interface IDataType<T = any> {
  code: number
  data: T
}
