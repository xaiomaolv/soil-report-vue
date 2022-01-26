import request from '@/utils/request'

// 查询qps控制列表
export function listQps(query) {
  return request({
    url: '/system/qps/list',
    method: 'get',
    params: query
  })
}

// 查询qps控制详细
export function getQps(qpsId) {
  return request({
    url: '/system/qps/' + qpsId,
    method: 'get'
  })
}

// 新增qps控制
export function addQps(data) {
  return request({
    url: '/system/qps',
    method: 'post',
    data: data
  })
}

// 修改qps控制
export function updateQps(data) {
  return request({
    url: '/system/qps',
    method: 'put',
    data: data
  })
}

// 删除qps控制
export function delQps(qpsId) {
  return request({
    url: '/system/qps/' + qpsId,
    method: 'delete'
  })
}

// 导出qps控制
export function exportQps(query) {
  return request({
    url: '/system/qps/export',
    method: 'get',
    params: query
  })
}