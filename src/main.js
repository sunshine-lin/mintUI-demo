// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 全局引入mintUI 
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
import './assets/reset.css'
Vue.config.productionTip = false

// 引入全局组件
import Header from './components/common/Header.vue'
import Footer from './components/common/Footer.vue'
Vue.component('g-header', Header)
Vue.component('g-footer', Footer)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
