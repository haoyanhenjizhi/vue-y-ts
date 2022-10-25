export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必填选项',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}/,
      message: '用户名必须是5到10位',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必填选项',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}/,
      message: '密码必须是3位以上的字母或数字',
      trigger: 'blur'
    }
  ]
}
