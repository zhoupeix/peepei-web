import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

import http from './http.js'
import './assets/css/common.css'    

Vue.config.productionTip = false
Vue.prototype.$http = http
Vue.prototype.router = router


Vue.mixin({  //vue全局可用该方法
  methods:{
    getAuthorization(){
      return {
        Authorization:`Bearer ${localStorage.token || " "}`
      }
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
