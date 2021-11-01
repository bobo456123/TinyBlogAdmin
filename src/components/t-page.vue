<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 21:39:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-01 23:33:37
-->
<template>
  <div class="typecho-pager-more">
    <a
      class="getmore"
      v-if="!isOver && !loading"
      @click="go(parseInt(index) + 1)"
    >
      加载更多
    </a>
    <div class="page-more-nodata" v-if="isOver">没有更多数据</div>
    <div class="page-more-loading" v-if="loading">
      加载中<span class="shadow_dot"></span>
    </div>
  </div>
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
    loading: {
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
