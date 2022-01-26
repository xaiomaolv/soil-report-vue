import request from '@/utils/request'

// 字典管理查询
export function getDictList(params) {
  return request({
    url: '/report/gaeaDict/pageList',
    method: 'GET',
    params,
  })
}
// 获取单个字典数据
export function getDictItems(dictCode) {
  return request({
    url: `/report/gaeaDict/select/${dictCode}`,
    method: 'get',
  })
}
// 字典管理新增
export function dictAdd(data) {
  return request({
    url: '/report/gaeaDict',
    method: 'POST',
    data,
  })
}

// 字典管理编辑
export function dictEdit(data) {
  return request({
    url: '/report/gaeaDict',
    method: 'PUT',
    data,
  })
}

export function dictDetail(data) {
  return request({
    url: '/report/gaeaDict/' + data.id,
    method: 'get',
    params: { accessKey: data.accessKey },
  })
}

// 字典管理批量删除
export function dictsDelect(data) {
  return request({
    url: `/report/gaeaDict/delete/batch`,
    method: 'POST',
    data,
  })
}

/**
 * 刷新数据字典
 * @param data
 */
export function freshDict(data) {
  return request({
    url: '/report/gaeaDict/freshDict',
    method: 'POST',
    data,
  })
}

// 获取国家省份城市
export function queryCountryCity(value) {
  return request({
    url: `/report/countryCity/select`,
    method: 'get',
    params: {
      value: value,
    },
  })
}

export default { dictDetail, getDictList, dictAdd, dictEdit, dictsDelect}
