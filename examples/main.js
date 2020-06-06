import Vue from 'vue'
import App from './App.vue'
import store from './store'
import lcUi from '../packages/index'

Vue.config.productionTip = false
Vue.use(lcUi)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
