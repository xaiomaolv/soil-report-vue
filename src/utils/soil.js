﻿ import axios from 'axios'
 import { getToken } from '@/utils/auth'
/**
 * 通用js方法封装处理
 * Copyright (c) 2019 soil
 */

// 日期格式化
export function parseTime(time, pattern) {
	if (arguments.length === 0 || !time) {
		return null
	}
	const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}'
	let date
	if (typeof time === 'object') {
		date = time
	} else {
		if ((typeof time === 'string') && (/^[0-9]+$/.test(time))) {
			time = parseInt(time)
		} else if (typeof time === 'string') {
			time = time.replace(new RegExp(/-/gm), '/');
		}
		if ((typeof time === 'number') && (time.toString().length === 10)) {
			time = time * 1000
		}
		date = new Date(time)
	}
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds(),
		a: date.getDay()
	}
	const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
		let value = formatObj[key]
		// Note: getDay() returns 0 on Sunday
		if (key === 'a') { return ['日', '一', '二', '三', '四', '五', '六'][value] }
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value || 0
	})
	return time_str
}

// 表单重置
export function resetForm(refName) {
	if (this.$refs[refName]) {
		this.$refs[refName].resetFields();
	}
}

// 添加日期范围
export function addDateRange(params, dateRange, propName) {
	var search = params;
	search.params = {};
	if (null != dateRange && '' != dateRange) {
		if (typeof (propName) === "undefined") {
			search.params["beginTime"] = dateRange[0];
			search.params["endTime"] = dateRange[1];
		} else {
			search.params["begin" + propName] = dateRange[0];
			search.params["end" + propName] = dateRange[1];
		}
	}
	return search;
}

// 回显数据字典
export function selectDictLabel(datas, value) {
	var actions = [];
	Object.keys(datas).some((key) => {
		if (datas[key].dictValue == ('' + value)) {
			actions.push(datas[key].dictLabel);
			return true;
		}
	})
	return actions.join('');
}

// 回显数据字典（字符串数组）
export function selectDictLabels(datas, value, separator) {
	var actions = [];
	var currentSeparator = undefined === separator ? "," : separator;
	var temp = value.split(currentSeparator);
	Object.keys(value.split(currentSeparator)).some((val) => {
		Object.keys(datas).some((key) => {
			if (datas[key].dictValue == ('' + temp[val])) {
				actions.push(datas[key].dictLabel + currentSeparator);
			}
		})
	})
	return actions.join('').substring(0, actions.join('').length - 1);
}

// 通用下载方法
export function download(fileName) {
	// window.location.href = baseURL + "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true;
	var url = "/common/download?fileName=" + encodeURI(fileName) + "&delete=" + true;
	axios({
	  method: 'get',
	  url: url,
	  baseURL: process.env.VUE_APP_BASE_API,
	  responseType: 'blob',
	  headers: { 'Authorization': 'Bearer ' + getToken() }
	}).then(res => {
	  const aLink = document.createElement('a')
	  const contentType = decodeURI(res.headers['content-type'])
	  const blob = new Blob([res.data], { type: contentType })
	  // //从response的headers中获取filename, 后端response.setHeader("Content-disposition", "attachment; filename=xxxx.docx") 设置的文件名;
	  const patt = new RegExp('filename=([^;]+\\.[^\\.;]+);*')
	  const contentDisposition = decodeURI(res.headers['content-disposition'])
	  const result = patt.exec(contentDisposition)
	  var resFileName = result[1]
	  resFileName=resFileName.replace(/\"/g, '')
	//debugger
	  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
		const fileName = resFileName
		window.navigator.msSaveOrOpenBlob(blob, fileName)
	  } else {
		// for Non-IE (chrome, firefox etc.)
		const elink = document.createElement('a');
		elink.download = resFileName;
		elink.style.display = 'none';
		elink.href = window.URL.createObjectURL(blob);
		document.body.appendChild(elink);
		elink.click();
		window.URL.revokeObjectURL(elink.href); // 释放URL 对象
		document.body.removeChild(elink);
	  }
	})
  }

// 字符串格式化(%s )
export function sprintf(str) {
	var args = arguments, flag = true, i = 1;
	str = str.replace(/%s/g, function () {
		var arg = args[i++];
		if (typeof arg === 'undefined') {
			flag = false;
			return '';
		}
		return arg;
	});
	return flag ? str : '';
}

// 转换字符串，undefined,null等转化为""
export function praseStrEmpty(str) {
	if (!str || str == "undefined" || str == "null") {
		return "";
	}
	return str;
}

/**
 * 构造树型结构数据
 * @param {*} data 数据源
 * @param {*} id id字段 默认 'id'
 * @param {*} parentId 父节点字段 默认 'parentId'
 * @param {*} children 孩子节点字段 默认 'children'
 */
export function handleTree(data, id, parentId, children) {
	let config = {
		id: id || 'id',
		parentId: parentId || 'parentId',
		childrenList: children || 'children'
	};

	var childrenListMap = {};
	var nodeIds = {};
	var tree = [];

	for (let d of data) {
		let parentId = d[config.parentId];
		if (childrenListMap[parentId] == null) {
			childrenListMap[parentId] = [];
		}
		nodeIds[d[config.id]] = d;
		childrenListMap[parentId].push(d);
	}

	for (let d of data) {
		let parentId = d[config.parentId];
		if (nodeIds[parentId] == null) {
			tree.push(d);
		}
	}

	for (let t of tree) {
		adaptToChildrenList(t);
	}

	function adaptToChildrenList(o) {
		if (childrenListMap[o[config.id]] !== null) {
			o[config.childrenList] = childrenListMap[o[config.id]];
		}
		if (o[config.childrenList]) {
			for (let c of o[config.childrenList]) {
				adaptToChildrenList(c);
			}
		}
	}
	return tree;
}
