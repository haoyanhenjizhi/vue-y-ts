import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc)
//使用dayjs编写一个时间格式转换函数将etc格式的时间转换
const DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss'

export function formatUtcString(
  utcString: string,
  format: string = DATE_TIME_FORMAT
) {
  return dayjs.utc(utcString).format(format)
}
