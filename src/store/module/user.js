/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:14:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 20:53:16
 */

import { getToken, setToken } from "@/utils/auth";
import { login, getCurrentInfo } from "@/api/user";

const user = {
    namespaced: true,
    state: {
        name: "module user",
        token: getToken(),
        userInfo: null
    },
    getters: {
        theName: function (state) {
            return "the" + state.name;
        }
    },
    mutations: {
        setToken: function (state, val) {
            state.token = val;
            setToken(val);      //elementui-admin-vue中没这句
        },
        setUserinfo: function (state, val) {
            state.userInfo = val;
        }
    },
    //参数ctx/{commit,state,getters,dispatch }
    actions: {
        getCurrentInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getCurrentInfo().then(res => {
                    if (res.code == 0) {
                        commit('setUserinfo', res.data)
                        resolve(res.data);
                    } else if (res.code > 0) {
                        reject(res.message);
                    }
                }).catch(error => {
                    reject(error)
                })
            })
        },
        login({ commit }, payload) {
            return new Promise((r, j) => {
                login(payload)
                    .then((res) => {
                        if (res.code === 0) {
                            commit("setToken", res.data.token);
                            r();
                            return;
                        }
                        j();
                    })
                    .catch(function () {
                        j();
                    });
            });
        }
    }
};

export default user;