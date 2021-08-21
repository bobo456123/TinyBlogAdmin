/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 21:39:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 15:41:11
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/assets/css/style.css";
import myPlugin from '@/plugin/myPlugin'

Vue.config.productionTip = false

Vue.use(myPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
