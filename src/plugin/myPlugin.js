/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-21 15:35:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-01 23:53:01
 */

import Cookies from "js-cookie";
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'
import $layer from "@/utils/layer";
import * as $util from "@/utils/index";
import filters from "@/filters/index";
const settings = require("@/settings");
export default {
    install: function (Vue, options = {}) {
        //通过编译eslint检测
        options

        //注册插件
        Object.keys(filters).forEach(key => {
            Vue.filter(key, filters[key])
        })

        //全局组件
        const requireComponent = require.context(
            // 其组件目录的相对路径
            '@/tiny-ui',
            // 是否查询其子目录
            true,
            // 匹配基础组件文件名的正则表达式
            /[\w-]+\.(vue|js)$/
        )

        requireComponent.keys().forEach(filePath => {
            // 获取组件配置
            const componentConfig = requireComponent(filePath)

            // 获取组件的 PascalCase 命名
            const componentName = upperFirst(
                camelCase(
                    // 获取和目录深度无关的文件名
                    filePath
                        .split('/')
                        .pop()
                        .replace(/\.\w+$/, '')
                )
            )

            // 全局注册组件
            Vue.component(
                componentName,
                // 如果这个组件选项是通过 `export default` 导出的，
                // 那么就会优先使用 `.default`，
                // 否则回退到使用模块的根。
                componentConfig.default || componentConfig
            )
        })

        //添加原型方法
        Vue.prototype.$cookie = Cookies;

        //添加弹窗方法
        Vue.prototype.$layer = $layer;

        //加载通用工具方法
        Vue.prototype.$util = $util;

        //全局常亮
        Vue.prototype.$settings = settings;
    }
};