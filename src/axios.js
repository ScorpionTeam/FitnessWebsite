/**
 *  axios配置信息
 *  create date: 2017-04-24 16:12:00
 *
 */
import axios from 'axios'
/*import store from './store/store'
import * as types from './store/types'*/
import router from './router'
import iView from 'iview'
import Auth from './Auth'


// axios 配置
/*正式库*/
axios.defaults.baseURL = 'http://192.168.0.119:7001/WebApi'
axios.defaults.headers['Content-Type'] = 'application/json;UTF-8'

/**
 * 添加请求拦截器  在发送请求之前执行
 */
axios.interceptors.request.use(
  config => {
    iView.LoadingBar.start()
    /**
     * 判断当前是否有Token 如果存在就添加到请求头部
     */
    let token = Auth.getToken()
    if (token) {
      config.headers.oauth = token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
/**
 * 添加响应拦截器  对相应的数据进行拦截操作
 */
axios.interceptors.response.use(
  response => {
    if (response.data.error) {
      iView.LoadingBar.error()
      let code = response.data.error.code
      if (code == 'need_token' || code == 'login_timeout' || code == 'token_error') {
        Auth.remove()
        iView.Message.error(response.data.error.message, 3, null)
        router.replace({
          path: '/login',
          query: {redirect: router.currentRoute.fullPath}
        })
      }
    }
    iView.LoadingBar.finish()
    return response.data
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 500:
          iView.Message.error('服务器异常', 3, null)
          break
        case 401:
          iView.Message.error('权限不足', 3, null)
          router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
          })
          break
      }
    }
    return Promise.reject(error.response)
  }
)
export default axios
