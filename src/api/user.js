/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-17 23:23:28
 */
import request from "@/utils/request";

export function login(data) {
    return request({
        url: "/auth/login",
        method: "post",
        data
    });
}

export function user() {
    return request({
        url: "/api/user",
        method: "get"
    });
}