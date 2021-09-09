/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:14:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-08 21:02:14
 */

import { getToken, setToken } from "@/utils/auth";
import { resDo } from "@/utils";
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
                    resDo(res, {
                        0: function (res) {
                            commit('setUserinfo', res.data)
                            resolve(res);
                        },
                        default: function (res) {
                            reject(res);
                        }
                    });
                }).catch(error => {
                    reject(error)
                })
            })
        },
        login({ commit }, payload) {
            return new Promise((r, j) => {
                login(payload)
                    .then((res) => {
                        resDo(res, {
                            0: function (res) {
                                commit("setToken", res.data.token);
                                r(res);
                            },
                            default: function (res) {
                                j(res);
                            }
                        });
                    })
                    .catch(function (error) {
                        j(error);
                    });
            });
        }
    }
};

export default user;