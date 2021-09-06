/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-06 21:06:24
 */
import request from "@/utils/request";

//最近回复
export function lastComment(param) {
    return request({
        url: "/api/comment/getLastestComments",
        method: "get",
        params: param
    });
}