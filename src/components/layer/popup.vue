<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 23:07:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-25 23:09:02
-->
<template>
  <div class="layer layer_popup overflow" :class="[type]">
    {{ type.toUpperCase() }} | {{ content }}
  </div>
</template>

<script>
export default {
  name: "popup",
  props: {
    type: {
      type: String,
      default: "success",
    },
    content: {
      type: String,
      default: "这里是popup提示内容！",
    },
    duration: {
      type: Number,
      default: 3000,
    },
  },
  mounted() {
    if (this.duration) {
      setTimeout(() => {
        this.$emit("close", this);
        this.$remove();
      }, this.duration);
    }
  },
};
</script>

<style>
</style>