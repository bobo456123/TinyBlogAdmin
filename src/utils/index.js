/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 22:39:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 22:57:54
 */
const settings = require("@/settings.js");
export function getPageTitle(title) {
    if (!title) {
        return settings.title;
    }
    return `${title} - ${settings.title}`
}