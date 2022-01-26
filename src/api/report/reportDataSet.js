import request from '@/utils/request'

export function reportDataSetList(params) {
  return request({
    url: '/report/dataSet/pageList',
    method: 'GET',
    params,
  })
}

export function reportDataSetAdd(data) {
  return request({
    url: '/report/dataSet',
    method: 'post',
    data
  })
}

export function reportDataSetDeleteBatch(data) {
  return request({
    url: '/report/dataSet/delete/batch',
    method: 'post',
    data
  })
}

export function reportDataSetUpdate(data) {
  return request({
    url: '/report/dataSet',
    method: 'put', data,
  })
}

export function reportDataSetDetail(data) {
  return request({
    url: '/report/dataSet/' + data.id,
    method: 'get',
    params: { accessKey: data.accessKey }
  })
}

export default { reportDataSetList, reportDataSetAdd, reportDataSetDeleteBatch, reportDataSetUpdate, reportDataSetDetail }
