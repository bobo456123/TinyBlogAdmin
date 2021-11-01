<template>
  <div class="main">
    <div class="body container">
      <div class="typecho-page-title">
        <h2>
          管理文章<a @click="$router.push({ path: '/admin/manage/post/add' })"
            >新增</a
          >
        </h2>
      </div>
      <div class="row typecho-page-main" role="main">
        <div class="col-mb-12 typecho-list">
          <div class="clearfix">
            <ul class="typecho-option-tabs right">
              <li class="">
                <a
                  href="http://127.0.0.2/admin/manage-posts.php?__typecho_all_posts=on"
                  >所有</a
                >
              </li>
              <li class="current">
                <a
                  href="http://127.0.0.2/admin/manage-posts.php?__typecho_all_posts=off"
                  >我的</a
                >
              </li>
            </ul>
            <ul class="typecho-option-tabs">
              <li class="current">
                <a href="http://127.0.0.2/admin/manage-posts.php">可用</a>
              </li>
              <li>
                <a href="http://127.0.0.2/admin/manage-posts.php?status=waiting"
                  >待审核 <span class="balloon">1</span>
                </a>
              </li>
              <li>
                <a href="http://127.0.0.2/admin/manage-posts.php?status=draft"
                  >草稿
                </a>
              </li>
            </ul>
          </div>

          <div class="typecho-list-operate clearfix">
            <form method="get">
              <div class="operate">
                <label
                  ><i class="sr-only">全选</i
                  ><input type="checkbox" class="typecho-table-select-all"
                /></label>
                <div class="btn-group btn-drop">
                  <button class="btn dropdown-toggle btn-s" type="button">
                    <i class="sr-only">操作</i>选中项
                    <i class="i-caret-down"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li>
                      <a
                        lang="你确认要删除这些文章吗?"
                        href="http://127.0.0.2/index.php/action/contents-post-edit?do=delete&amp;_=4cc2fb6a3366fc01f7a89738f8aa32cc"
                        >删除</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
              <div class="search" role="search">
                <input
                  type="text"
                  class="text-s"
                  placeholder="请输入关键字"
                  value=""
                  name="keywords"
                />
                <select name="category">
                  <option value="">所有分类</option>
                  <option value="1">默认分类</option>
                  <option value="3">默认子分类</option>
                  <option value="4">分类1</option>
                  <option value="6">分类11</option>
                  <option value="7">分类12</option>
                  <option value="5">分类2</option>
                </select>
                <button type="submit" class="btn btn-s">筛选</button>
              </div>
            </form>
          </div>
          <!-- end .typecho-list-operate -->

          <form method="post" name="manage_posts" class="operate-form">
            <div class="typecho-table-wrap">
              <table class="typecho-list-table">
                <colgroup>
                  <col width="20" />
                  <col width="6%" />
                  <col width="45%" />
                  <col width="" />
                  <col width="18%" />
                  <col width="16%" />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>标题</th>
                    <th>作者</th>
                    <th>分类</th>
                    <th>日期</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    :id="`post-${post.cid}`"
                    v-for="post in postList"
                    :key="post.cid"
                  >
                    <td>
                      <input
                        type="checkbox"
                        :value="`${post.cid}`"
                        name="cid[]"
                      />
                    </td>
                    <td>
                      <a
                        :href="`/admin/comment/${post.cid}`"
                        class="balloon-button size-10"
                        title="2 评论"
                        >2</a
                      >
                    </td>
                    <td>
                      <a
                        @click="
                          $router.push({
                            path: `/admin/manage/post/edit/${post.cid}`,
                          })
                        "
                        >{{ post.title }}</a
                      >
                      <a
                        @click="
                          $router.push({
                            path: `/admin/manage/post/edit/${post.cid}`,
                          })
                        "
                        :title="post.title"
                        ><i class="i-edit"></i
                      ></a>
                      <a
                        :href="`${$settings.apiUrl}archive/${post.cid}`"
                        :title="post.title"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>
                      <a
                        @click="
                          $router.push({
                            path: `/admin/post/author/${post.user.uid}`,
                          })
                        "
                        >{{ post.user.screenName }}</a
                      >
                    </td>
                    <td>
                      <a
                        @click="
                          $router.push({
                            path: `/admin/post/category/${post.meta[0].mid}`,
                          })
                        "
                        >{{ post.meta[0].name }}</a
                      >
                    </td>
                    <td>
                      {{
                        post.created | timestampToDate | dateFormat("MM月dd日")
                      }}
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="6">
                      <t-page
                        @click="getPostList"
                        :isOver="isOver"
                        :index="$route.params.index"
                        :loading="loading"
                      ></t-page>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </form>
          <!-- end .operate-form -->
        </div>
        <!-- end .typecho-list -->
      </div>
      <!-- end .typecho-page-main -->
    </div>
  </div>
</template>

<script>
import { list as postList } from "@/api/post";
import TPage from "@/components/t-page";
export default {
  name: "postList",
  data() {
    return {
      postList: [],
      isOver: false,
      loading: true,
    };
  },
  components: { TPage },
  methods: {
    getPostList:function(param) {
      let { index = 1, pagesize = this.$settings.pagesize } = param;
      this.loading = true;
      postList({ pagesize: pagesize, index: index }).then((res) => {
        this.loading = false;
        this.$util.resDo(res, {
          0: (res) => {
            this.postList = this.postList.concat(res.data.data);
            this.isOver = res.data.data.length < pagesize;
          },
        });
      });
    },
  },
};
</script>

<style>
</style>