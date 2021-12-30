<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 21:39:00
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-14 23:24:34
-->
<template>
  <nav id="typecho-nav-list">
    <ul class="root" v-for="menu in Menus" :key="menu.mid">
      <li class="parent">
        <a @click="go(menu)">{{ menu.meta.title }}</a>
      </li>

      <ul class="child" v-if="menu.children && menu.children.length">
        <li v-for="cMenu in menu.children" :key="cMenu.mid">
          <a @click="go(cMenu, menu.path)">{{ cMenu.meta.title }}</a>
        </li>
      </ul>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "t-menu",
  props: {
    menus: {
      type: Array,
      default: function () {
        return [];
      },
    },
    basePath: {
      type: String,
      default: "/",
    },
  },
  computed: {
    Menus() {
      return this.menus.filter((menu) => {
        return !menu.meta.isHide;
      });
    },
  },
  methods: {
    go(menu, rootPath) {
      let path = "/admin" + (rootPath ? "/" + rootPath : "") + "/" + menu.path;
      this.$router.push({ path: path });
    },
  },
};
</script>

<style scoped>
</style>
