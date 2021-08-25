/*
 * @Descripttion: 弹窗组件库（未来考虑独立开发，npm发布）
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 23:02:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 21:04:12
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
    _index: 10000,
    _create(component, { props, on }) {
        //各类组件的事件监听,component.name是key，必填；
        const eventMap = {
            alert: {
                sure: function (vm) {
                    //vm===返回的layer
                    console.log("sure", vm);
                },
                close: function (vm) {
                    vm.$remove();
                }
            }
        };
        //方案一：渲染函数
        const vm = new Vue({
            render: h => {
                return h(component, {
                    props,
                    style: { "z-index": ++this._index },
                    on: Object.assign({}, eventMap[component.name], on)
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
    alert: function (option) {
        let layer = this._create(modules.alert, option || {});
        layer.show();
        return layer;
    },
    popup: function (option) {
        let layer = this._create(modules.popup, option || {});
        layer.show();
        return layer;
    }
};