/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:35:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 23:12:03
 */
module.exports = [
    {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/admin/dashboard"),
        meta: {
            title: "仪表盘"
        }
    },
    {
        path: "post",
        name: "post",
        redirect: "post/list"
    },
    {
        path: "post/list",
        name: "post-list",
        component: () => import("@/views/admin/post/list"),
        meta: {
            title: "帖子列表"
        }
    },
    {
        path: "post/add",
        name: "post-add",
        component: () => import("@/views/admin/post/add"),
        meta: {
            title: "撰写新文章"
        }
    }

]