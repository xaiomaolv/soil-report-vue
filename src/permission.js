import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from '@/utils/auth'
import { initDictToLocalstorage } from "@/api/report/dict-data";

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/auth-redirect', '/bind', '/register','/password','/echart','/excelreport/designer', '/bigscreen/designer','/bigscreen/viewer', '/aj/**']
const bolen = true
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (getToken()) {
    /* has token*/
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    }else {	
			if(store.getters.firstLogin){			
				if(whiteList.indexOf(to.path) !== -1){
					next()
				}
			}else{
				if (store.getters.roles.length === 0) {
					// 初始化数据字典到浏览器本地缓存
					initDictToLocalstorage(() => {});
					// 判断当前用户是否已拉取完user_info信息
					store.dispatch('GetInfo').then(() => {								
						store.dispatch('GenerateRoutes').then(accessRoutes => {
							// 根据roles权限生成可访问的路由表
							router.addRoutes(accessRoutes) // 动态添加可访问路由表
							next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
						})										  
					}).catch(err => {	
						if(err.code !== 300){
							store.dispatch('LogOut').then(() => {
								Message.error(err)
							}).finally(()=>next({ path: '/' }))	
						}	
						router.push({ path: '/password' })								  
						})
				} else {				
					next()
				}
			}     
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.fullPath}`) // 否则全部重定向到登录页
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
