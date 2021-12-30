<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-09-09 22:48:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-01 23:36:38
-->
<template>
  <div class="main">
    <div class="body container">
      <div class="typecho-page-title">
        <h2>
          管理用户<a @click="$router.push('/admin/manage/user/add')">新增</a>
        </h2>
      </div>
      <div class="row typecho-page-main" role="main">
        <div class="col-mb-12 typecho-list">
          <div class="typecho-list-operate clearfix">
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
                      lang="你确认要删除这些用户吗?"
                      href="http://127.0.0.2/index.php/action/users-edit?do=delete&amp;_=6fb61ec261b6d497814c4c48a5e127b3"
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
                v-model="keyword"
              />
              <button type="submit" class="btn btn-s" @click="getUserList">
                筛选
              </button>
            </div>
          </div>
          <!-- end .typecho-list-operate -->

          <form method="post" name="manage_users" class="operate-form">
            <div class="typecho-table-wrap">
              <table class="typecho-list-table">
                <colgroup>
                  <col width="20" />
                  <col width="6%" />
                  <col width="30%" />
                  <col width="" />
                  <col width="25%" />
                  <col width="15%" />
                </colgroup>
                <thead>
                  <tr>
                    <th></th>
                    <th></th>
                    <th>用户名</th>
                    <th>昵称</th>
                    <th>电子邮件</th>
                    <th>用户组</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    :id="`user-${user.uid}`"
                    v-for="user in userList"
                    :key="user.uid"
                  >
                    <td>
                      <input type="checkbox" :value="user.uid" name="uid[]" />
                    </td>
                    <td>
                      <a href="#" class="balloon-button left size-20">{{
                        user.content.length
                      }}</a>
                    </td>
                    <td>
                      <a
                        @click="
                          $router.push({
                            path: `/admin/manage/user/edit/${user.uid}`,
                          })
                        "
                        >{{ user.username }}</a
                      >
                      <a
                        :href="`${$settings.apiUrl}author/${user.uid}`"
                        :title="`浏览 ${user.username}`"
                        target="_blank"
                        ><i class="i-exlink"></i
                      ></a>
                    </td>
                    <td>{{ user.screenName }}</td>
                    <td>
                      <a :href="`mailto:${user.email}`" target="_blank">{{
                        user.email
                      }}</a>
                    </td>
                    <td>{{ user.group }}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="6">
                      <t-page
                        @click="getUserList"
                        :isOver="isOver"
                        :index="$route.params.index"
                        :loading="loading"
                      ></t-page>
                    </td>
                  </tr>
                </tfoot>
              </table>
              <!-- end .typecho-list-table -->
            </div>
            <!-- end .typecho-table-wrap -->
          </form>
        </div>
        <!-- end .typecho-list -->
      </div>
      <!-- end .typecho-page-main -->
    </div>
  </div>
</template>

<script>
import { list as userList } from "@/api/user";
// import TPage from "@/components/t-page";
export default {
  name: "users",
  data() {
    return {
      userList: [],
      isOver: false,
      keyword: null,
      loading: true,
    };
  },
  // components: { TPage },
  methods: {
    getUserList: function (param) {
      let { index = 1, pagesize = this.$settings.pagesize } = param;
      this.loading = true;
      userList({
        pagesize: pagesize,
        index: index,
        keyword: this.keyword,
      }).then((res) => {
          this.loading = false;
          this.$util.resDo(res, {
            0: (res) => {
              this.userList = this.userList.concat(res.data.data);
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