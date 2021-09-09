<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:23:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-09 23:34:07
-->
<template>
  <div>
    <!-- 公共头部 -->
    <div class="typecho-head-nav clearfix" role="navigation">
      
        <t-menu :menus="adminMenu"></t-menu>
      
      <div class="operate">
        <a
          title="最后登录: 28分钟前"
          href="http://127.0.0.2/admin/profile.php"
          class="author"
          >adminer</a
        ><a class="exit" href="http://127.0.0.2/index.php/action/logout">登出</a
        ><a href="http://127.0.0.2/" target="_blank">网站</a>
      </div>
    </div>

    <!-- 主区域 -->
    <router-view></router-view>

    <!-- 公共底部 -->
    <div class="typecho-foot" role="contentinfo">
      <div class="copyright">
        <a :href="`${$settings.apiUrl}`" class="i-logo-s" target="_blank">{{
          $settings.siteName
        }}</a>
        <p>
          由
          <a :href="`${$settings.apiUrl}`" target="_blank">{{
            $settings.siteName
          }}</a>
          强力驱动, 版本 {{ $settings.version }}
        </p>
      </div>
      <!-- <nav class="resource">
        <a href="http://docs.typecho.org" target="_blank">帮助文档</a> •
        <a href="http://forum.typecho.org" target="_blank">支持论坛</a> •
        <a href="https://github.com/typecho/typecho/issues" target="_blank"
          >报告错误</a
        >
        •
        <a href="http://extends.typecho.org" target="_blank">资源下载</a>
      </nav> -->
    </div>
  </div>
</template>

<script>
import TMenu from "@/components/t-menu";
import adminMenu from "@/router/admin";
export default {
  name: "admin",
  data() {
    return { adminMenu };
  },
  components: {
    TMenu,
  },
  created: function () {
    console.log("create");
    console.log(this.$store.state);
    console.log(this.$store.state.admin.name);
  },
};
</script>

<style>
</style>