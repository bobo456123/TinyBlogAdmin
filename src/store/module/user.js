/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:14:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 23:14:20
 */

// import { getToken, setToken } from "@/utils/auth";
// console.log(getToken, setToken);

const user = {
    namespaced: true,
    state: {
        name: "module user",
        token: "token 123465"
    },
    getters: {
        theName: function (state) {
            return "the" + state.name;
        }
    },
    mutations: {
        setToken: function (state, val) {
            state.token = val;
            // setToken(val);      //elementui-admin-vue中没这句
        },
        test: function (state) {
            console.log(state.name);
            return state.name;
        }
    },
    actions: {
        asynctest: function (context) {
            return new Promise((r) => {
                setTimeout(() => {
                    console.log(context);
                    r("1000ms之后");
                }, 1000);
            });
        }
    }
};

module.exports = user;