<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:41:52
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-14 23:17:06
-->
<template>
  <div>post > edit</div>
</template>

<script>
import { show } from "@/api/post";
export default {
  name: "postEdit",
  created() {
    this.getPost(this.$route.params.cid);
  },
  methods: {
    getPost(cid) {
      show(cid).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>