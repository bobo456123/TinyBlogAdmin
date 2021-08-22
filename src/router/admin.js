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
        redirect: "post/list",
        children: [
            {
                path: "list",
                name: "post-list",
                component: () => import("@/views/admin/post/list"),
                meta: {
                    title: "帖子列表"
                }
            }
        ]
    },

]