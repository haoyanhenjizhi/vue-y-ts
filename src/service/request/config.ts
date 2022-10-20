//使用if判断为是开发的时候的环境还是说是生产的环境
let BASE_URL = ''
const TIME_OUT = 10000
if (process.env.NODE_ENV === 'development') {
  BASE_URL = 'http://123.207.32.32:8000/'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://yan.org/prod'
} else {
  BASE_URL = 'http://yan.org/test'
}
export { BASE_URL, TIME_OUT }
