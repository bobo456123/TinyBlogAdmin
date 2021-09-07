<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 21:39:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-07 22:26:22
-->
<template>
  <ul class="typecho-pager">
    <li :class="{ current: index == i }" v-for="i in index" :key="`page_${i}`">
      <a @click="go(i)">{{ i }}</a>
    </li>
    <li class="next" v-if="!isOver">
      <a @click="go(parseInt(index) + 1)">»</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "t-page",
  props: {
    index: {
      type: [String, Number],
      default: 1,
    },
    pagesize: {
      type: Number,
      default: 10,
    },
    isOver: {
      type: Boolean,
      default: false,
    },
  },
  created() {
    this.$emit("click", {
      pagesize: this.pagesize,
      index: parseInt(this.index),
    });
  },
  methods: {
    go(index) {
      this.$emit("click", { pagesize: this.pagesize, index: parseInt(index) });
    },
  },
};
</script>

<style scoped>
</style>
