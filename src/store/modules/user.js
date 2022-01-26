import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken, getRKey, setRKey, removeRKey } from '@/utils/auth'
import router from '../../router'
const user = {
  state: {
    token: getToken(),
    rKey: getRKey(),
    name: '',
    avatar: '',
    roles: [],
    permissions: [],
		firstLogin:false
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_RKEY: (state, rKey) => {
      state.rKey = rKey
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
		SET_FIRSTLOGIN: (state, firstLogin) => {
      state.firstLogin = firstLogin
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      const code = userInfo.code
      const uuid = userInfo.uuid
      return new Promise((resolve, reject) => {
        login(username, password, code, uuid).then(res => {
          setToken(res.token)
          commit('SET_TOKEN', res.token)
          setRKey(res.rKey)
          commit('SET_RKEY', res.rKey)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
					if(res.code == 300){				
						 commit('SET_FIRSTLOGIN', true)		
						 reject(res)
						 return
					}		
					const user = res.user
					const avatar = user.avatar == "" ? require("@/assets/images/profile.jpg") : process.env.VUE_APP_BASE_API + user.avatar;
					if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
						commit('SET_ROLES', res.roles)
						commit('SET_PERMISSIONS', res.permissions)
					} else {
						commit('SET_ROLES', ['ROLE_DEFAULT'])
					}
					commit('SET_NAME', user.userName)
					commit('SET_AVATAR', avatar)
					commit('SET_FIRSTLOGIN', false)	
					resolve(res)					  
         
        }).catch(error => {
          reject(error)
        })
      })
    },
    
    // 退出系统
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')
          commit('SET_RKEY', '')
          commit('SET_ROLES', [])
          commit('SET_PERMISSIONS', [])
          sessionStorage.clear()
          localStorage.clear()
          removeToken()
          removeRKey()
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        commit('SET_RKEY', '')
        removeToken()
        removeRKey()
        resolve()
      })
    }
  }
}

export default user
