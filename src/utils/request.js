/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:02:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 23:30:37
 */
import axios from "axios";
import $layer from "@/utils/layer";
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'
import Cookies from "js-cookie";
const versionPath = require("@/settings").version.path;

const service = axios.create({
    baseURL: "http://127.0.0.1:7001/",
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            config.url = config.url.replace(/\/api\//i, `/api/${versionPath}/`);
            config.headers['Authorization'] = 'Bearer ' + getToken()
        }
        return config;
    },
    err => {
        console.log(err);
        return Promise.reject(err);
    }
);

service.interceptors.response.use(
    res => {
        res = res.data;
        if (res.code === -1) {
            $layer.popup({
                props: {
                    content: '登录已过期，轻重新登录', type: "error"
                },
                on: {
                    close: () => {
                        Cookies.set("rememberPWD", 0);
                        router.push({ path: "/login" });
                    }
                }
            });
            return Promise.reject();
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        $layer.popup({ props: { content: "网络异常，轻重新尝试，或联系管理员!", type: "error" } });
        return Promise.reject(error)
    });

export default service;