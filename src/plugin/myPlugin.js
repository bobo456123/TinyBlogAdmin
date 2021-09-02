/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-21 15:35:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-02 23:21:59
 */

import Cookies from "js-cookie";
import $layer from "@/utils/layer";
import * as $util from "@/utils/index";
import filters from "@/filters/index";
export default {
    install: function (Vue, options = {}) {
        //通过编译eslint检测
        options

        //注册插件
        Object.keys(filters).forEach(key => {
            Vue.filter(key, filters[key])
        })

        //添加原型方法
        Vue.prototype.$cookie = Cookies;

        //添加弹窗方法
        Vue.prototype.$layer = $layer;

        //加载通用工具方法
        Vue.prototype.$util = $util;
    }
};