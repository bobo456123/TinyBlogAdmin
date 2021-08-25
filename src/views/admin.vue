<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:23:07
 * @LastEditors: 
 * @LastEditTime: 2021-08-25 21:41:54
-->
<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: "admin",
  created:function () {
    console.log("create");
    console.log(this.$store.state);
    console.log(this.$store.state.admin.name);
  }
};
</script>

<style>
</style>