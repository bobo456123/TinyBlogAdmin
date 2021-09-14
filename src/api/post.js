/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:33:40
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-14 23:11:11
 */
import request from "@/utils/request";

//帖子列表
export function list(param) {
    return request({
        url: "/api/post",
        method: "get",
        params: param
    });
}
//帖子详情
export function show(cid) {
    return request({
        url: `/api/post/${cid}`,
        method: "get"
    });
}