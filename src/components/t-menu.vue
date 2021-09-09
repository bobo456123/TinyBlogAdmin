<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 21:39:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 23:34:20
-->
<template>
  <nav id="typecho-nav-list">
    <ul
      :class="{ root: isRoot, child: !isRoot }"
      v-for="menu in menus"
      :key="menu.name"
    >
      <li class="parent">
        <a @click="go(menu)">{{ menu.meta.title }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "t-menu",
  props: {
    isRoot: {
      type: Boolean,
      default: true,
    },
    menus: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    go(menu) {
      this.$router.push({ path: menu.path });
    },
  },
};
</script>

<style scoped>
</style>
