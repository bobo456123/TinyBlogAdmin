/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 14:57:31
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 22:59:11
 */
import router from "@/router";
import { getToken } from "@/utils/auth";
import { getCurrentInfo } from "@/api/user";
import store from '@/store';
import { getPageTitle } from "@/utils";
//白名单中的路由，免检直接通过;
const whiteList = ["login"];

router.beforeEach(function (to, from, next) {
    console.log("router.beforeEach");
    if (whiteList.includes(to.name)) {
        next();
        return;
    }

    const token = getToken();
    if (token) {
        if (store.getters.userInfo) {
            next();
            return;
        }
        getCurrentInfo()
            .then(() => {
                next();
            })
            .catch(() => {
                console.log("无效");
            });
    } else {
        next({ name: "login", query: { redirect: to.path } });
    }
});

router.afterEach((to) => {
    document.title = getPageTitle(to.meta.title);
})