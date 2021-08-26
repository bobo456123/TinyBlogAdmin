/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 21:39:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-26 20:34:28
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/permission'
import "@/assets/css/style.css";
import "@/assets/css/ui.css";
import "@/assets/css/normalize.css";
import "@/assets/css/grid.css";
import "@/assets/css/layer.css";
import myPlugin from '@/plugin/myPlugin'

Vue.config.productionTip = false

Vue.use(myPlugin);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
