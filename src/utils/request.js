/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:02:54
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 23:45:21
 */
import axios from "axios";
import { Message } from "element-ui";
import store from '@/store'
import { getToken } from '@/utils/auth'

const service = axios.create({
    baseURL: "http://127.0.0.1:7001/",
    timeout: 5000
});

service.interceptors.request.use(
    config => {
        if (store.state.token) {
            config.headers['X-Token'] = getToken()
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
    } else if (res.code > 0) {
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