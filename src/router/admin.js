module.exports = [
    {
        path: "dashboard",
        name: "dashboard",
        component: () => import("@/views/admin/dashboard")
    },
    {
        path: "post",
        name: "post",
        redirect: "post/list"
    },
    {
        path: "post/list",
        name: "post-list",
        component: () => import("@/views/admin/post/list")
    }
]