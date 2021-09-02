/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-02 22:33:13
 */
import request from "@/utils/request";

//用户列表
export function list(param) {
    return request({
        url: "/api/post",
        method: "get",
        data: param
    });
}