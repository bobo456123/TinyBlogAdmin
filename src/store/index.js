/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 23:11:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 23:04:58
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: "root"
    },
    getters: {
        token: state => state.user.token,
    },
    modules: {
        admin: require("./module/admin"),
        user: require("./module/user"),
    }
});