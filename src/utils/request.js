/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:02:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 14:37:14
 */
import axios from "axios";
import { Message } from "element-ui";
import store from '@/store'
import { getToken } from '@/utils/auth'
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

service.interceptors.response.use(res => {
    res = res.data;
    if (res.code === -1) {
        Message({
            message: res.message || 'Error',
            type: 'error',
            duration: 5 * 1000
        })
        return;
    }
    return res;
});

export default service;