import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

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
            redirect: "/admin/dashboard",
            children: require("./admin.js")
        },
    ]
});