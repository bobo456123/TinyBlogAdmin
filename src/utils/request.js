/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:02:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 22:01:45
 */
import axios from "axios";
import $layer from "@/utils/layer";
import store from '@/store'
import router from '@/router'
import { getToken } from '@/utils/auth'
import Cookies from "js-cookie";
const settings = require("@/settings");

const service = axios.create({
    baseURL: settings.apiUrl,
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if (store.getters.token) {
            if (/^\/(api|auth)\//i.test(config.url)) {
                config.url = "/" + settings.version + config.url;
            }

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
                    content: '登录已过期，请重新登录', type: "error"
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
        $layer.popup({
            props: { content: "网络异常，轻重新尝试，或联系管理员!", type: "error" },
            on: {
                close: () => {
                    Cookies.set("rememberPWD", 0);
                    router.push({ path: "/login" });
                }
            }
        });
        return Promise.reject(error)
    });

export default service;