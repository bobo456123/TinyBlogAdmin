<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-25 21:12:55
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 23:43:49
-->
<template>
  <input
    :type="type"
    :value="value"
    @input="onInput"
    v-bind="$attrs"
    class="text"
  />

  <!-- 自定义组件双绑：:value, @input -->
</template>

<script>
import mixins2 from "@/mixin";

export default {
  name: "t-input",
  inheritAttrs: false,
  mixins: [mixins2],
  model: {
    //此处设置为默认值，可省略
    prop: "value",
    event: "input",
  },
  props: {
    type: {
      type: String,
      default: "text",
    },
    value: {
      type: String,
      default: "",
    },
  },
  methods: {
    onInput: function (e) {
      this.$emit("input", e.target.value.trim());
      // 触发校验
      this.dispatch("t-form-item", "validate");
    },
  },
};
</script>

<style lang="scss" scoped>
</style>