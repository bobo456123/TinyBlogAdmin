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
              <label @click="selectAll">
                <i class="sr-only">全选</i>
                <input
                  type="checkbox"
                  class="typecho-table-select-all"
                  :checked="isAll ? 'checked' : ''"
                />
              </label>
              <div class="btn-group btn-drop">
                <button
                  class="btn dropdown-toggle btn-s"
                  type="button"
                  @click="isShow.patchDropdown = !isShow.patchDropdown"
                >
                  <i class="sr-only">操作</i>选中项
                  <i class="i-caret-down"></i>
                </button>
                <ul
                  class="dropdown-menu"
                  :style="{ display: isShow.patchDropdown ? 'block' : 'none' }"
                >
                  <li @click="removeUsers">
                    <a href="javascript:void(0)">删除</a>
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
                      <input type="checkbox" v-model="user.isCheck" />
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
import { list as userList, destroyUsers } from "@/api/user";
export default {
  name: "users",
  data() {
    return {
      userList: [],
      isOver: false,
      keyword: null,
      loading: true,
      isShow: {
        patchDropdown: false,
      },
    };
  },
  computed: {
    selectedItemId() {
      return this.userList
        .filter((item) => item.isCheck)
        .map((item) => item.uid);
    },
    isAll() {
      return this.selectedItemId.length == this.userList.length;
    },
  },
  methods: {
    selectAll() {
      let flag = this.isAll;
      this.userList.forEach((item) => (item.isCheck = !flag));
    },
    removeUsers() {
      let ids = this.selectedItemId;
      this.isShow.patchDropdown = false;
      this.$layer.confirm({
        props: {
          content: "确定删除用户?",
        },
        on: {
          sure: () => {
            destroyUsers({ ids: ids }).then((res) => {
              this.$util.resDo(res, {
                0: () => {
                  this.$layer.popup("删除成功！");
                  this.userList = [];
                  this.getUserList({});
                },
                default: (res) => {
                  this.$layer.popup({
                    props: { content: res.message, type: "error" },
                  });
                },
              });
            });
          },
        },
      });
    },
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
            res.data.data.forEach((element) => {
              element.isCheck = false;
            });
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