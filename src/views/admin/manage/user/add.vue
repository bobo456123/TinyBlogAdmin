<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-09-09 22:48:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-25 00:09:55
-->
<template>
  <div class="main">
    <div class="body container">
      <div class="typecho-page-title">
        <h2>新增用户</h2>
      </div>
      <div class="row typecho-page-main" role="form">
        <div class="col-mb-12 col-tb-6 col-tb-offset-3">
          <form
            enctype="application/x-www-form-urlencoded"
            onsubmit="return false;"
          >
            <ul class="typecho-option" id="typecho-option-item-name-0">
              <li>
                <label class="typecho-label" for="name-0-1"> 用户名 *</label>
                <input
                  id="name-0-1"
                  name="username"
                  type="text"
                  class="text"
                  v-model="model.username"
                />
                <p class="description">
                  此用户名将作为用户登录时所用的名称.<br />请不要与系统中现有的用户名重复.
                </p>
              </li>
            </ul>
            <ul class="typecho-option" id="typecho-option-item-mail-1">
              <li>
                <label class="typecho-label" for="mail-0-2">
                  电子邮箱地址 *</label
                >
                <input
                  id="mail-0-2"
                  name="email"
                  type="text"
                  class="text"
                  v-model="model.email"
                />
                <p class="description">
                  电子邮箱地址将作为此用户的主要联系方式.<br />请不要与系统中现有的电子邮箱地址重复.
                </p>
              </li>
            </ul>
            <ul class="typecho-option" id="typecho-option-item-screenName-2">
              <li>
                <label class="typecho-label" for="screenName-0-3">
                  用户昵称</label
                >
                <input
                  id="screenName-0-3"
                  name="screenName"
                  type="text"
                  class="text"
                  v-model="model.screenName"
                />
                <p class="description">
                  用户昵称可以与用户名不同, 用于前台显示.<br />如果你将此项留空,
                  将默认使用用户名.
                </p>
              </li>
            </ul>
            <ul class="typecho-option" id="typecho-option-item-password-3">
              <li>
                <label class="typecho-label" for="password-0-4">
                  用户密码 *</label
                >
                <input
                  id="password-0-4"
                  name="password"
                  type="password"
                  class="w-60"
                  v-model="model.password"
                />
                <p class="description">
                  为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性.
                </p>
              </li>
            </ul>
            <ul class="typecho-option" id="typecho-option-item-confirm-4">
              <li>
                <label class="typecho-label" for="confirm-0-5">
                  用户密码确认 *</label
                >
                <input
                  id="confirm-0-5"
                  name="confirm"
                  type="password"
                  class="w-60"
                  v-model="model.confirm"
                />
                <p class="description">
                  请确认你的密码, 与上面输入的密码保持一致.
                </p>
              </li>
            </ul>
            <ul class="typecho-option" id="typecho-option-item-url-5">
              <li>
                <label class="typecho-label" for="url-0-6"> 个人主页地址</label>
                <input
                  id="url-0-6"
                  name="url"
                  type="text"
                  class="text"
                  v-model="model.url"
                />
                <p class="description">
                  此用户的个人主页地址, 请用 <code>http://</code> 开头.
                </p>
              </li>
            </ul>
            <ul class="typecho-option" id="typecho-option-item-group-6">
              <li>
                <label class="typecho-label" for="group-0-7"> 用户组</label>
                <select name="group" id="group-0-7" v-model="model.group">
                  <option value="subscriber">关注者</option>
                  <option value="contributor">贡献者</option>
                  <option value="editor">编辑</option>
                  <option value="administrator">管理员</option>
                </select>
                <p class="description">
                  不同的用户组拥有不同的权限.<br />具体的权限分配表请<a
                    href="http://docs.typecho.org/develop/acl"
                    target="_blank"
                    >参考这里</a
                  >.
                </p>
              </li>
            </ul>
            <ul
              class="typecho-option typecho-option-submit"
              id="typecho-option-item--9"
            >
              <li>
                <button type="submit" class="btn primary" @click="addUser">
                  增加用户
                </button>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { create as addUser } from "@/api/user";
export default {
  name: "userAdd",
  data() {
    return {
      model: {
        username: "",
        email: "",
        screenName: "",
        password: "",
        confirm: "",
        url: "",
        group: "administrator",
      },
    };
  },
  methods: {
    reset() {
      this.model = {
        username: "",
        email: "",
        screenName: "",
        password: "",
        confirm: "",
        url: "",
        group: "administrator",
      };
    },
    addUser() {
      if (!this.$util.validate(this.model.username, "username")) {
        return this.$layer.popup("用户名错误", "error");
      }
      if (!this.$util.validate(this.model.email, "email")) {
        return this.$layer.popup("电子邮箱地址错误", "error");
      }
      if (!this.$util.validate(this.model.password, "password")) {
        return this.$layer.popup("用户密码错误", "error");
      }
      if (this.model.password != this.model.confirm) {
        return this.$layer.popup("两次密码输入不同", "error");
      }
      if (this.model.url) {
        if (!this.$util.validate(this.model.url, "url")) {
          return this.$layer.popup("个人主页地址错误", "error");
        }
      }
      addUser(this.model)
        .then(() => {
          this.$layer.popup({
            props: {
              content: "用户创建成功！",
            },
            on: {
              close: () => {
                this.reset();
              },
            },
          });
        })
        .catch(() => {
          this.$layer.popup("用户创建失败！", "error");
        });
    },
  },
};
</script>

<style>
</style>