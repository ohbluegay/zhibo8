// The Vue build version to load with sthe `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import store from './store'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
import '../dist/font-awesome/css/font-awesome.css'
Vue.config.productionTip = false
Vue.use(Mint)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
router.beforeEach((to,from,next) => {
  if(to.path === '/news'){
    next({path:'/'})
  }else{
    next()
  }
})
