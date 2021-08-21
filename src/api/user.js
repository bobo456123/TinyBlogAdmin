/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-21 16:35:12
 */
import request from "@/utils/request";

//检验口令
export function checkToken(data) {
    return request({
        url: "/api/checkToken",
        method: "post",
        data
    });
}
//登录
export function login(data) {
    return request({
        url: "/auth/login",
        method: "post",
        data
    });
}
//用户列表
export function user() {
    return request({
        url: "/api/user",
        method: "get"
    });
}