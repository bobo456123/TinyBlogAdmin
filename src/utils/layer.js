/*
 * @Descripttion: 弹窗组件库（未来考虑独立开发，npm发布）
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 23:02:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 23:49:43
 */
import Vue from "vue";

const modulesFiles = require.context('@/components/layer', true, /\.vue$/);
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // set './app.js' => 'app'
    const moduleName = modulePath.replace(/^\.\/(.*)\.vue$/, '$1');
    const value = modulesFiles(modulePath);
    modules[moduleName] = value.default;
    return modules;
}, {});

export default {
    _create(component, props) {
        //方案一：渲染函数
        const vm = new Vue({
            render: h => {
                return h(component, {
                    props
                });
            }
        }).$mount();
        const layer = vm.$children[0];
        layer.$remove = function () {
            document.body.removeChild(layer.$el);
            layer.$destroy();
        }

        document.body.appendChild(layer.$el);
        return layer;

        //方案二：也可使用Vue.extend()来实现弹窗,使用propsData。
    },
    alert: function (props) {
        let layer = this._create(modules.alert, props || {});
        layer.show();
        return layer;
    }
};