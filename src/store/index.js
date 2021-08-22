/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 23:11:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 20:52:44
 */
import Vue from 'vue'
import Vuex from 'vuex'
import admin from "./module/admin";
import user from "./module/user";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        name: "root"
    },
    getters: {
        token: state => state.user.token,
        userInfo: state => state.user.userInfo,
    },
    modules: {
        admin: admin,
        user: user
    }
});
export default store;