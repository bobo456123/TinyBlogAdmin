/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:35:42
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-21 19:23:07
 */

// 控制台
const console = [
    {
        path: "dashboard",
        name: "console-dashboard",
        component: () => import("@/views/admin/console/dashboard"),
        meta: {
            title: "控制台"
        },
    },
    {
        path: "profile",
        name: "console-profile",
        component: () => import("@/views/admin/console/profile"),
        meta: {
            title: "个人设置"
        },
    },
    {
        path: "plugins",
        name: "console-plugins",
        component: () => import("@/views/admin/console/plugins"),
        meta: {
            title: "插件"
        },
    },
    {
        path: "themes",
        name: "console-themes",
        component: () => import("@/views/admin/console/themes"),
        meta: {
            title: "外观"
        },
    },
    {
        path: "backup",
        name: "console-backup",
        component: () => import("@/views/admin/console/backup"),
        meta: {
            title: "备份"
        },
    }
];

// 撰写
const write = [
    {
        path: "addPost",
        name: "write-addPost",
        redirect: "/admin/manage/post/add",
        meta: {
            title: "撰写文章"
        },
    },
    {
        path: "addPage",
        name: "write-addPage",
        redirect: "/admin/manage/page/add",
        meta: {
            title: "创建页面"
        },
    },
];

// 管理
const manage = [
    {
        path: "post",
        name: "manage-post",
        component: () => import("@/views/admin/placeholder"),
        redirect: "post/list",
        meta: {
            title: "文章"
        },
        children: [
            {
                path: "list/:index?",
                name: "post-list",
                component: () => import("@/views/admin/manage/post/list"),
                meta: {
                    title: "文章列表"
                }
            },
            {
                path: "add",
                name: "post-add",
                component: () => import("@/views/admin/manage/post/add"),
                meta: {
                    title: "撰写新文章"
                }
            },
            {
                path: "edit/:cid",
                name: "post-edit",
                component: () => import("@/views/admin/manage/post/edit"),
                meta: {
                    title: "编辑文章"
                }
            }
        ]
    },
    {
        path: "page",
        name: "manage-page",
        component: () => import("@/views/admin/placeholder"),
        redirect: "page/list",
        meta: {
            title: "独立页面"
        },
        children: [
            {
                path: "list/:index?",
                name: "page-list",
                component: () => import("@/views/admin/manage/page/list"),
                meta: {
                    title: "页面列表"
                }
            },
            {
                path: "add",
                name: "page-add",
                component: () => import("@/views/admin/manage/page/add"),
                meta: {
                    title: "创建新页面"
                }
            },
            {
                path: "edit",
                name: "page-edit",
                component: () => import("@/views/admin/manage/page/edit"),
                meta: {
                    title: "编辑页面"
                }
            }
        ]
    },
    {
        path: "comments",
        name: "manage-comments",
        component: () => import("@/views/admin/manage/comments"),
        meta: {
            title: "评论"
        }
    },
    {
        path: "categories",
        name: "manage-categories",
        component: () => import("@/views/admin/manage/categories"),
        meta: {
            title: "分类"
        }
    },
    {
        path: "tags",
        name: "manage-tags",
        component: () => import("@/views/admin/manage/tags"),
        meta: {
            title: "标签"
        }
    },
    {
        path: "medias",
        name: "manage-medias",
        component: () => import("@/views/admin/manage/medias"),
        meta: {
            title: "文件"
        }
    },
    {
        path: "user",
        name: "manage-user",
        component: () => import("@/views/admin/placeholder"),
        redirect: "user/list",
        meta: {
            title: "用户"
        },
        children: [
            {
                path: "list/:index?",
                name: "user-list",
                component: () => import("@/views/admin/manage/user/list"),
                meta: {
                    title: "用户列表"
                }
            },
            {
                path: "listmember/:index?",
                name: "member-list",
                component: () => import("@/views/admin/manage/user/list"),
                meta: {
                    title: "用户列表"
                }
            },
            {
                path: "add",
                name: "user-add",
                component: () => import("@/views/admin/manage/user/add"),
                meta: {
                    title: "添加用户"
                }
            },
            {
                path: "edit/:uid",
                name: "user-edit",
                component: () => import("@/views/admin/manage/user/add"),
                meta: {
                    title: "编辑用户"
                }
            }
        ]
    },
];

// 设置
const options = [
    {
        path: "general",
        name: "options-general",
        component: () => import("@/views/admin/options/general"),
        meta: {
            title: "基本"
        },
    },
    {
        path: "discussion",
        name: "options-discussion",
        component: () => import("@/views/admin/options/discussion"),
        meta: {
            title: "评论"
        },
    },
    {
        path: "reading",
        name: "options-reading",
        component: () => import("@/views/admin/options/reading"),
        meta: {
            title: "阅读"
        },
    },
    {
        path: "永久链接",
        name: "options-permalink",
        component: () => import("@/views/admin/options/permalink"),
        meta: {
            title: "永久链接"
        },
    },
];

module.exports = [
    {
        path: "console",
        name: "console",
        redirect: "console/dashboard",
        component: () => import("@/views/admin/placeholder"),
        children: console,
        meta: {
            title: "控制台"
        }
    },
    {
        path: "write",
        name: "write",
        redirect: "manage/post/add",
        component: () => import("@/views/admin/placeholder"),
        children: write,
        meta: {
            title: "撰写"
        }
    },
    {
        path: "manage",
        name: "manage",
        redirect: "manage/post/list",
        component: () => import("@/views/admin/placeholder"),
        children: manage,
        meta: {
            title: "管理"
        }
    },
    {
        path: "options",
        name: "options",
        redirect: "options/general",
        component: () => import("@/views/admin/placeholder"),
        children: options,
        meta: {
            title: "设置"
        }
    },
    {
        path: '/*',
        name: 'error_404',
        meta: {
            isHide: true,
            title: '404-页面不存在'
        },
        component: () => import("@/views/admin/placeholder"),
    }
]