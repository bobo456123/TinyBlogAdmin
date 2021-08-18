/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 23:27:24
 * @LastEditors: 
 * @LastEditTime: 2021-08-18 23:51:42
 */
const admin = {
    namespaced: true,
    state: { name: "module admin" },
    getters: {
        theName: function (state) {
            return "the" + state.name;
        }
    },
    mutations: {
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

export default admin;