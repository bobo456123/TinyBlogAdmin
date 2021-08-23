<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-22 23:07:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-23 23:33:12
-->
<template>
  <div v-if="isShow" class="layer mask">
    <div class="layer_alert">
      <div class="layer_alert_title">
        {{ title }}
        <div class="close" @click="onClose">x</div>
      </div>
      <div class="layer_alert_content">{{ content }}</div>
      <div class="layer_alert_button">
        <div class="tbtn sure fr" @click="onSure">确定</div>
      </div>
    </div>
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
    onSure() {
      this.$emit("sure", this);
    },
    onClose() {
      this.$emit("close", this);
    },
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