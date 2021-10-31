/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 22:39:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 23:49:31
 */
const settings = require("@/settings.js");
const $layer = require("@/utils/layer");

/**
 * @name: 设置title
 * @msg: 
 * @param {*} title
 * @return {*}
 */
export function getPageTitle(title) {
    if (!title) {
        return settings.title;
    }
    return `${title} - ${settings.title}`
}

//res数据预处理
export function resDo(res, handles) {
    /**
     * handles 处理方法映射
     * eg:{
     *      0:function(res){xxx},
     *      100:function(res){xxx},
     *      200:function(res){xxx},
     *      ...
     *      default:function(res){xxx}}     //所有>0的情况的默认处理函数，优先级最低。错误码如果已经匹配，则不执行;
     */
    if (!res || typeof res != "object" || typeof res.code === "undefined") {
        $layer.popup({
            props: { content: "返回数据错误，请联系管理员!", type: "error" },
        });
        return;
    }

    //正常
    if (res.code === 0) {
        handles[0](res);
        return;
    }

    //异常
    // res.code<0的情况request.js中已经做了默认处理，这里不重复处理
    //走到这儿默认都是res.code>0    
    if (typeof handles[res.code] === "undefined") {
        if (typeof handles["default"] !== "undefined") {
            handles["default"](res);
            return;
        }
        $layer.popup({
            props: { content: "数据返回异常!", type: "error" },
        });
        return;
    }

    handles[res.code](res);
}

//时间戳转Date
export function timestampToDate(timestamp) {
    // if (typeof timestamp !== "number") {
    //     console.error("数据类型错误");
    //     return;
    // }
    if (Number(timestamp)) {
        timestamp = Number(timestamp);
        if (timestamp.toString().length !== 13) {
            timestamp *= 1e3;
        }
    }

    return new Date(timestamp);
}

//Date格式化输出string
export function dateFormat(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1, //月份 
        "d+": date.getDate(), //日 
        "h+": date.getHours(), //小时 
        "m+": date.getMinutes(), //分 
        "s+": date.getSeconds(), //秒 
        "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
        "S": date.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

export function debounce(fn, time) {
    let timer = null;
    let that = this;
    return function () {
        if (timer) {
            return;
        }
        let params = arguments;
        timer = window.setTimeout(function () {
            timer = null;
            fn.apply(that, params);
        }, time);
    }
}

//验证表单字段
const rules = new Map;
rules.set("username", new RegExp("^\\w{5,12}$"));
rules.set("password", new RegExp("^\\w{3,18}$"));
rules.set("email", new RegExp(".+\\@\\w+\\.\\w+"));
rules.set("url", new RegExp("^https?:\\/\\/"));
export function validate(str, type) {
    let rule = rules.get(type);
    if (!str) {
        // console.error(`数据为空`);
        return false;
    }
    if (!rule) {
        console.log(`${type}的验证规则不存在`);
        return false;
    }
    return rule.test(str);
}