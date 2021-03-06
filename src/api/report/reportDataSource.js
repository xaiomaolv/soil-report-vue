import request from '@/utils/request'

export function reportDataSourceList(params) {
  return request({
    url: '/report/dataSource/pageList',
    method: 'GET',
    params,
  })
}

export function reportDataSourceAdd(data) {
  return request({
    url: '/report/dataSource',
    method: 'post',
    data
  })
}

export function reportDataSourceDeleteBatch(data) {
  return request({
    url: '/report/dataSource/delete/batch',
    method: 'post',
    data
  })
}

export function reportDataSourceUpdate(data) {
  return request({
    url: '/report/dataSource',
    method: 'put',
    data
  })
}

export function reportDataSourceDetail(data) {
  return request({
    url: '/report/dataSource/' + data.id,
    method: 'get',
    params: { accessKey: data.accessKey }
  })
}

export function testConnection (data) {
  return request({
    url: '/report/dataSource/testConnection',
    method: 'post',
    data,
  })
}

export default { reportDataSourceList, reportDataSourceAdd, reportDataSourceDeleteBatch, reportDataSourceUpdate, reportDataSourceDetail, testConnection}
