/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { hyRequest } from '../index'

import { IAccount } from './type'
enum LoginAPI {
  AccountLogin = './'
}
export function accountLoginReuest(account: IAccount) {
  return hyRequest.post({
    url: LoginAPI.AccountLogin,
    data: account
  })
}
