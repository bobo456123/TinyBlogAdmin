<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 23:07:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-22 23:38:25
-->
<template>
  <div v-if="isShow">
    <div class="title">{{ title }}</div>
    <div class="content">{{ content }}</div>
    <div class="button">确定 取消</div>
  </div>
</template>

<script>
export default {
  name: "alert",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    content: {
      type: String,
      default: "这里是alert提示内容！",
    },
  },
  data() {
    return {
      isShow: false,
    };
  },
  methods: {
    show() {
      this.isShow = true;
    },
    hide() {
      this.isShow = false;
    },
  },
};
</script>

<style>
</style>