/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-17 22:17:41
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-19 21:58:47
 */
import Cookies from "js-cookie";
const TOKENKEY = "admin-token";

export function getToken() {
    return Cookies.get(TOKENKEY);
}
export function setToken(val) {
    Cookies.set(TOKENKEY, val);
}
export function removeToken() {
    Cookies.remove(TOKENKEY);
}