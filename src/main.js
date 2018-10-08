import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import store from './js/store'

Vue.use(VueRouter);

Vue.config.productionTip = false

window.vm = new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
