<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:23:07
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-09-01 20:10:21
-->
<template>
  <div>
    <!-- 公共头部 -->
    <div class="typecho-head-nav clearfix" role="navigation">
      <nav id="typecho-nav-list">
        <ul class="root focus">
          <li class="parent">
            <a href="http://127.0.0.2/admin/index.php">控制台</a>
          </li>
          <ul class="child">
            <li class="focus">
              <a href="http://127.0.0.2/admin/index.php">概要</a>
            </li>
            <li><a href="http://127.0.0.2/admin/profile.php">个人设置</a></li>
            <li><a href="http://127.0.0.2/admin/plugins.php">插件</a></li>
            <li><a href="http://127.0.0.2/admin/themes.php">外观</a></li>
            <li class="last">
              <a href="http://127.0.0.2/admin/backup.php">备份</a>
            </li>
          </ul>
        </ul>
        <ul class="root">
          <li class="parent">
            <a href="http://127.0.0.2/admin/write-post.php">撰写</a>
          </li>
          <ul class="child">
            <li>
              <a href="http://127.0.0.2/admin/write-post.php">撰写文章</a>
            </li>
            <li class="last">
              <a href="http://127.0.0.2/admin/write-page.php">创建页面</a>
            </li>
          </ul>
        </ul>
        <ul class="root">
          <li class="parent">
            <a href="http://127.0.0.2/admin/manage-posts.php">管理</a>
          </li>
          <ul class="child">
            <li><a href="http://127.0.0.2/admin/manage-posts.php">文章</a></li>
            <li>
              <a href="http://127.0.0.2/admin/manage-pages.php">独立页面</a>
            </li>
            <li>
              <a href="http://127.0.0.2/admin/manage-comments.php">评论</a>
            </li>
            <li>
              <a href="http://127.0.0.2/admin/manage-categories.php">分类</a>
            </li>
            <li><a href="http://127.0.0.2/admin/manage-tags.php">标签</a></li>
            <li><a href="http://127.0.0.2/admin/manage-medias.php">文件</a></li>
            <li class="last">
              <a href="http://127.0.0.2/admin/manage-users.php">用户</a>
            </li>
          </ul>
        </ul>
        <ul class="root">
          <li class="parent">
            <a href="http://127.0.0.2/admin/options-general.php">设置</a>
          </li>
          <ul class="child">
            <li>
              <a href="http://127.0.0.2/admin/options-general.php">基本</a>
            </li>
            <li>
              <a href="http://127.0.0.2/admin/options-discussion.php">评论</a>
            </li>
            <li>
              <a href="http://127.0.0.2/admin/options-reading.php">阅读</a>
            </li>
            <li class="last">
              <a href="http://127.0.0.2/admin/options-permalink.php"
                >永久链接</a
              >
            </li>
          </ul>
        </ul>
      </nav>
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
        <a href="http://typecho.org" class="i-logo-s" target="_blank"
          >Typecho</a
        >
        <p>
          由 <a href="http://typecho.org" target="_blank">Typecho</a> 强力驱动,
          版本 1.1 (17.10.30)
        </p>
      </div>
      <nav class="resource">
        <a href="http://docs.typecho.org" target="_blank">帮助文档</a> •
        <a href="http://forum.typecho.org" target="_blank">支持论坛</a> •
        <a href="https://github.com/typecho/typecho/issues" target="_blank"
          >报告错误</a
        >
        •
        <a href="http://extends.typecho.org" target="_blank">资源下载</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "admin",
  created: function () {
    console.log("create");
    console.log(this.$store.state);
    console.log(this.$store.state.admin.name);
  },
};
</script>

<style>
</style>