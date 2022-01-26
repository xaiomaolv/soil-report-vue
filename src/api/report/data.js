
import request from '@/utils/request'


// 获取列表字典
export function gettListDict(data) {
  return request({
    url: `/report/data`,
    method: 'POST',
    data,
  })
}

// 获取搜索字典数据
export function getDictData(params) {
  return request({
    url: `/report/data/params`,
    method: 'GET',
    params,
  })
}

export default { gettListDict, getDictData }
