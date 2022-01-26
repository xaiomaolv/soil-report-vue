import 'babel-polyfill'
import Vue from 'vue'

import Cookies from 'js-cookie'

import Element from 'element-ui'
import './assets/styles/element-variables.scss'

import '@/assets/styles/index.scss' // global css
import '@/assets/styles/soil.scss' // soil css
import App from './App'
import store from './store'
import router from './router'
import permission from './directive/permission'

import './assets/icons' // icon
import './permission' // permission control
import { getDicts } from "@/api/system/dict/data";
import { getConfigKey } from "@/api/system/config";
import { parseTime, resetForm, addDateRange, selectDictLabel, selectDictLabels, download, handleTree } from "@/utils/soil";
import Pagination from "@/components/Pagination";
// 自定义表格工具扩展
import RightToolbar from "@/components/RightToolbar"
//解密验签方法
import encrypt from '@/utils/soil-encrypt'

// 全局方法挂载
Vue.prototype.getDicts = getDicts
Vue.prototype.getConfigKey = getConfigKey
Vue.prototype.parseTime = parseTime
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.selectDictLabel = selectDictLabel
Vue.prototype.selectDictLabels = selectDictLabels
Vue.prototype.download = download
Vue.prototype.handleTree = handleTree
Vue.prototype.decryptVerifySign = encrypt.decryptVerifySign

Vue.prototype.msgSuccess = function (msg) {
  this.$message({ showClose: true, message: msg, type: "success" });
}

Vue.prototype.msgError = function (msg) {
  this.$message({ showClose: true, message: msg, type: "error" });
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg);
}

// 全局组件挂载
Vue.component('Pagination', Pagination)
Vue.component('RightToolbar', RightToolbar)

Vue.use(permission)


import dataV from '@jiaminghi/data-view';
Vue.use(dataV);
// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';
import './assets/scss/flex.css';


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

// register global filter.
import * as filter from '@/utils/report/filter'
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

// register global mixins.
import mixins from '@/mixins'
Vue.mixin(mixins)

import Avue from '@smallwei/avue';
import '@smallwei/avue/lib/index.css';
Vue.use(Avue);

// anji component
import anjiCrud from '@/components/report/AnjiPlus/anji-crud/anji-crud'
import ejkjCrud from '@/components/report/AnjiPlus/anji-crud/ejkj-crud'
import anjiSelect from '@/components/report/AnjiPlus/anji-select'
import anjiUpload from '@/components/report/AnjiPlus/anji-upload'
Vue.component('anji-upload', anjiUpload)
Vue.component('anji-crud', anjiCrud)
Vue.component('ejkj-crud', ejkjCrud)
Vue.component('anji-select', anjiSelect)

// 全局定义echarts
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
Vue.component('v-chart', ECharts)

/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online! ! !
 */

Vue.use(Element, {
  size: Cookies.get(process.env.VUE_APP_KEY + '-' + 'size') || 'medium' // set element-ui default size
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
