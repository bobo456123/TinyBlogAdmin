/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:24:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-19 22:39:24
 */
import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

//其原因在于Vue-router在3.1之后把$router.push()方法改为了Promise。
//所以假如没有回调函数，错误信息就会交给全局的路由错误处理，因此就会报上述的错误。
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject)
        return originalPush.call(this, location, onResolve, onReject);

    return originalPush.call(this, location)
        .catch(err => err);
}

export default new Router({
    routes: [
        {
            path: "/",
            redirect: "/login",
        },
        {
            path: "/login",
            name: "login",
            component: () => import("@/views/login"),
            meta: {
                title: "登录"
            }
        },
        {
            path: "/admin",
            name: "admin",
            component: () => import("@/views/admin"),
            redirect: "/admin/console/dashboard",
            children: require("./admin.js")
        },
    ]
});