type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  type: IFormType
  label: string
  rules?: any[]
  placeholder?: any
  //针对select
  options?: any[]
  //针对其他的
  otherOptions?: any
}
export interface IForm {
  labelWidth?: string
  itemLayout: any
  colLayout: any
  formItems: IFormItem[]
}
