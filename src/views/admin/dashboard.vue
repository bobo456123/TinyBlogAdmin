<template>
  <div class="main">
    <div class="container typecho-dashboard">
      <div class="typecho-page-title">
        <h2>网站概要</h2>
      </div>
      <div class="row typecho-page-main">
        <div class="col-mb-12 welcome-board" role="main">
          <p>
            目前有 <em>9</em> 篇文章, 并有 <em>9</em> 条关于你的评论在
            <em>6</em> 个分类中. <br />点击下面的链接快速开始:
          </p>

          <ul id="start-link" class="clearfix">
            <li>
              <a href="http://127.0.0.2/admin/write-post.php">撰写新文章</a>
            </li>
            <li><a href="http://127.0.0.2/admin/themes.php">更换外观</a></li>
            <li><a href="http://127.0.0.2/admin/plugins.php">插件管理</a></li>
            <li>
              <a href="http://127.0.0.2/admin/options-general.php">系统设置</a>
            </li>
            <!--<li><a href="http://127.0.0.2/admin/profile.php">更新我的资料</a></li>-->
          </ul>
        </div>

        <div class="col-mb-12 col-tb-4" role="complementary">
          <section class="latest-link">
            <h3>最近发布的文章</h3>
            <ul>
              <li v-for="post in postList" :key="post.cid">
                <span>{{post.created | timestampToDate | dateFormat("MM-dd")}}</span>
                <a
                  :href="`${$settings.apiUrl}archive/${post.cid}`"
                  class="title"
                  target="_blank"
                  >{{ post.title }}</a
                >
              </li>
            </ul>
          </section>
        </div>

        <div class="col-mb-12 col-tb-4" role="complementary">
          <section class="latest-link">
            <h3>最近得到的回复</h3>
            <ul>
              <li v-for="comment in commentList" :key="comment.coid">
                <span>{{
                  comment.created | timestampToDate | dateFormat("MM-dd")
                }}</span>
                <a
                  :href="`${$settings.apiUrl}archive/${comment.cid}/#comment-${comment.coid}`"
                  class="title"
                  target="_blank"
                  >{{ comment.author }}</a
                >: {{ comment.text }}
              </li>
            </ul>
          </section>
        </div>

        <div class="col-mb-12 col-tb-4" role="complementary">
          <section class="latest-link">
            <h3>官方最新日志</h3>
            <div id="typecho-message">
              <ul>
                <li>
                  <span>10.29</span>
                  <a :href="`${$settings.apiUrl}`" target="_blank">TinyBlog v1 正式版发布</a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { list as postList } from "@/api/post";
import { lastComment } from "@/api/comment";
export default {
  name: "dashboard",
  data() {
    return {
      postList: [],
      commentList: [],
    };
  },
  created() {
    //最近发布
    this.getPostList();
    //最近回复
    this.getLastComment();
  },
  methods: {
    getPostList() {
      postList({ pagesize: 9 }).then((res) => {
        this.$util.resDo(res, {
          0: (res) => {
            this.postList = res.data.data;
          },
        });
      });
    },
    getLastComment() {
      lastComment({ limit: 9 }).then((res) => {
        this.$util.resDo(res, {
          0: (res) => {
            this.commentList = res.data;
          },
        });
      });
    },
  },
};
</script>

<style>
</style>