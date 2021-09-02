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
                <span>{{post.created|timestampToDate|dateFormat("MM-dd")}}</span>
                <a href="/archive/" class="title" target="_blank">{{post.title}}</a>
              </li>
            </ul>
          </section>
        </div>

        <div class="col-mb-12 col-tb-4" role="complementary">
          <section class="latest-link">
            <h3>最近得到的回复</h3>
            <ul>
              <li>
                <span>5.19</span>
                <a
                  href="http://127.0.0.2/index.php/archives/12/#comment-9"
                  class="title"
                  target="_blank"
                  >5555</a
                >: 55555555
              </li>
              <li>
                <span>5.18</span>
                <a
                  href="http://127.0.0.2/index.php/archives/12/#comment-8"
                  class="title"
                  target="_blank"
                  >4444</a
                >: 44444
              </li>
              <li>
                <span>5.7</span>
                <a
                  href="http://127.0.0.2/index.php/archives/4/#comment-7"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://www.typecho.org"
                  rel="external nofollow"
                  target="_blank"
                  >adminer</a
                >: 你好，这是2021年5月7日发的一条消息
              </li>
              <li>
                <span>5.2</span>
                <a
                  href="http://127.0.0.2/index.php/archives/1/#comment-6"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://www.typecho.org"
                  rel="external nofollow"
                  target="_blank"
                  >admin</a
                >: 444
              </li>
              <li>
                <span>5.2</span>
                <a
                  href="http://127.0.0.2/index.php/archives/1/#comment-5"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://www.typecho.org"
                  rel="external nofollow"
                  target="_blank"
                  >admin</a
                >: 3333
              </li>
              <li>
                <span>5.2</span>
                <a
                  href="http://127.0.0.2/index.php/archives/1/#comment-4"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://www.typecho.org"
                  rel="external nofollow"
                  target="_blank"
                  >admin</a
                >: 2222
              </li>
              <li>
                <span>5.2</span>
                <a
                  href="http://127.0.0.2/index.php/archives/1/#comment-3"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://www.typecho.org"
                  rel="external nofollow"
                  target="_blank"
                  >admin</a
                >: 111111
              </li>
              <li>
                <span>5.2</span>
                <a
                  href="http://127.0.0.2/index.php/archives/1/#comment-2"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://www.abc.com"
                  rel="external nofollow"
                  target="_blank"
                  >某某先生</a
                >: 逛逛
              </li>
              <li>
                <span>5.2</span>
                <a
                  href="http://127.0.0.2/index.php/archives/1/#comment-1"
                  class="title"
                  target="_blank"
                ></a
                ><a
                  href="http://typecho.org"
                  rel="external nofollow"
                  target="_blank"
                  >Typecho</a
                >: 欢迎加入 Typecho 大家族
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
                  <a href="http://typecho.org/archives/135/" target="_blank"
                    >Typecho 1.1(17.10.30) 正式版发布</a
                  >
                </li>
                <li>
                  <span>10.26</span>
                  <a href="http://typecho.org/archives/133/" target="_blank"
                    >Typecho 1.1(17.10.24) Beta版发布</a
                  >
                </li>
                <li>
                  <span>8.21</span>
                  <a href="http://typecho.org/archives/132/" target="_blank"
                    >一次关于Typecho的分享</a
                  >
                </li>
                <li>
                  <span>10.14</span>
                  <a href="http://typecho.org/archives/128/" target="_blank"
                    >参与下一个版本开发方向的投票</a
                  >
                </li>
                <li>
                  <span>10.11</span>
                  <a href="http://typecho.org/archives/126/" target="_blank"
                    >Typecho 1.0 (14.10.10) 修正版发布</a
                  >
                </li>
                <li>
                  <span>10.9</span>
                  <a href="http://typecho.org/archives/125/" target="_blank"
                    >Typecho 1.0 正式版发布</a
                  >
                </li>
                <li>
                  <span>5.27</span>
                  <a href="http://typecho.org/archives/124/" target="_blank"
                    >Typecho 1.0测试版发布</a
                  >
                </li>
                <li>
                  <span>2.25</span>
                  <a href="http://typecho.org/archives/121/" target="_blank"
                    >Typecho新特性，多级分类支持</a
                  >
                </li>
                <li>
                  <span>12.12</span>
                  <a href="http://typecho.org/archives/111/" target="_blank"
                    >Typecho 0.9(13.12.12) 修正版发布</a
                  >
                </li>
                <li>
                  <span>12.10</span>
                  <a href="http://typecho.org/archives/109/" target="_blank"
                    >Typecho 0.9 正式版发布</a
                  >
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
export default {
  name: "dashboard",
  data() {
    return {
      postList: [],
    };
  },
  created() {
    let self = this;
    postList({ pagesize: 9 }).then((res) => {
      self.$util.resDo(res, {
        0: function (res) {
          self.postList = res.data.data;
        },
      });
    });
  },
};
</script>

<style>
</style>