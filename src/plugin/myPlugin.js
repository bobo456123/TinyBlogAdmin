/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-21 15:35:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 15:42:55
 */

import Cookies from "js-cookie";
export default {
    install: function (Vue, options = {}) {
        //通过编译eslint检测
        options
        
        //添加原型方法
        Vue.prototype.$cookie = Object.create(Cookies);
    }
};