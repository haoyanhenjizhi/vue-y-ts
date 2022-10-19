//使用if判断为是开发的时候的环境还是说是生产的环境
let BASE_URL = ''
let BASE_NAME = ''
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://yan.org/dev'
  BASE_NAME = 'yan'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://yan.org/prod'
  BASE_NAME = 'kobe'
} else {
  BASE_URL = 'http://yan.org/test'
  BASE_NAME = 'james'
}
export { BASE_URL, BASE_NAME }
