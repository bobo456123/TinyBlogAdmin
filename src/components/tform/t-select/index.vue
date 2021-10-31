<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-25 21:12:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 09:37:57
-->
<template>
  <select @change="onChange" v-bind="$attrs" :value="value" :val="value">
    <slot></slot>
  </select>
</template>

<script>
import mixins2 from "@/mixin";
export default {
  name: "t-select",
  inheritAttrs: false,
  mixins: [mixins2],
  model: {
    //此处设置为默认值，可省略
    prop: "value",
    event: "change",
  },
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onChange(e) {
      console.log("select change");
      this.$emit("change", e.target.value);

      // 触发校验
      this.dispatch("t-form-item", "validate");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>