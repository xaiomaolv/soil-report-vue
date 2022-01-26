import request from '@/utils/request'

export function reportShareList(params) {
  return request({
    url: '/report/reportShare/pageList',
    method: 'GET',
    params,
  })
}

export function reportShareAdd(data) {
  return request({
    url: '/report/report/share',
    method: 'post',
    data
  })
}

export function reportShareDeleteBatch(data) {
return request({
url: '/report/reportShare/delete/batch',
method: 'post',
data
})
}

export function reportShareUpdate(data) {
  return request({
    url: '/report/reportShare',
    method: 'put', data,
  })
}

export function reportShareDetail(data) {
  return request({
    url: '/report/reportShare/' + data.id,
    method: 'get',
    // params: { accessKey: data.accessKey }
  })
}

export function reportShareDetailByCode(data) {
  return request({
    url: '/report/reportShare/detailByCode',
    method: 'get',
    params: { shareCode: data }
  })
}

export default { reportShareList, reportShareAdd, reportShareDeleteBatch, reportShareUpdate, reportShareDetail }
