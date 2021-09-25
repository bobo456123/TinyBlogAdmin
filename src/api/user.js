/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-25 23:33:28
 */
import request from "@/utils/request";

//检验口令
export function getCurrentInfo() {
    return request({
        url: "/api/getCurrentInfo",
        method: "get"
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
export function list(param) {
    return request({
        url: "/api/user",
        method: "get",
        params: param
    });
}