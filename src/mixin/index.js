/*
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-30 20:01:43
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-30 21:09:00
 */

export default {
    methods: {
        dispatch(componentName, eventName) {
            let parent = this.$parent;
            if (!parent) {
                return;
            }
            while (parent) {
                if (parent.$options.name === componentName) {
                    parent.$emit(eventName, ...Array.prototype.slice.call(arguments, 2));
                    return;
                }
                parent = parent.$parent;
            }
        }
    }
}