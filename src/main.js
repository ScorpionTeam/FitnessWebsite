// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from './axios'
import iView from 'iview'
import Mint from 'mint-ui';
import 'iview/dist/styles/iview.css'
import 'mint-ui/lib/style.css'
import '../theme/index.scss'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(Mint);
Vue.use(iView);
/* eslint-disable no-new */
/*new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})*/
new Vue({
  el: '#app',
  axios,
  router,
  render: h => h(App)
}).$mount('#app')
