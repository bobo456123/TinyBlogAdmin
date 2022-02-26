/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 15:15:21
 */
import request from "@/utils/request";

//获取当前登录用户信息
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
//创建用户
export function create(param) {
    return request({
        url: "/api/user",
        method: "post",
        data: param
    });
}
//删除用户
export function destroyUsers(param) {
    return request({
        url: "/api/user",
        method: "delete",
        data: param
    });
}
//获取用户信息
export function getUserByUsername(username) {
    return request({
        url: "/api/user/getUserByUsername",
        method: "get",
        params: {
            username
        }
    });
}