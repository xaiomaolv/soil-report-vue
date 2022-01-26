import request from '@/utils/request'
import { getShareToken, getToken } from "@/utils/auth";
import axios from 'axios';

// 保存大屏设计
export function insertDashboard(data) {
  return request({
    url: '/report/reportDashboard',
    method: 'post',
    data,
  })
}

// 预览、查询大屏详情
export function detailDashboard(data) {
  return request({
    url: '/report/reportDashboard/' + data,
    // headers: { 'Share-Token': getShareToken(), 'Authorization': 'Bearer ' +getToken() },
    method: 'get',
  })
}

// 数据集查询
export function queryAllDataSet(data) {
  return request({
    url: '/report/dataSet/queryAllDataSet',
    method: 'get',

  })
}

// 获取数据集信息
export function detailBysetId(data) {
  return request({
    url: '/report/dataSet/detailBysetId/' + data,
    method: 'get',
  })
}

// 获取动态数据
export function getData(data) {
  return request({
    url: '/report/reportDashboard/getData',
    method: 'post',
    // headers: { 'Share-Token': getShareToken(), 'Authorization': getToken() },
    data,
  })
}

// 导出大屏
export function exportDashboard(data) {
  return new Promise((resolve) =>{
    axios({
      method:'get',
      url: process.env.VUE_APP_BASE_API + '/report/reportDashboard/export',
      headers: { 'Authorization': 'Bearer ' +getToken() },
      params:data,
      responseType:'blob'
    }).then(res =>{
      resolve(res.data);
    }).catch(err =>{
      resolve('error');
    })
  })

}

// 导入大屏
export function importDashboard(data) {
  return request({
    url: '/report/reportDashboard/import',
    method: 'post',
    data,
  })
}
