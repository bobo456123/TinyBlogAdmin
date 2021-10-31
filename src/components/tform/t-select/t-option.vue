<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-25 21:12:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 09:36:12
-->
<template>
  <option :value="value" v-bind="$attrs">{{ label }}</option>
</template>

<script>
export default {
  name: "t-option",
  inheritAttrs: false,
  model: {
    //此处设置为默认值，可省略
    prop: "value",
    event: "change",
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    value: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
</style>