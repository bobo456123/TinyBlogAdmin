<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-09-09 22:48:11
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 09:12:48
-->
<template>
  <div class="main">
    <div class="body container">
      <div class="typecho-page-title">
        <h2>新增用户</h2>
      </div>
      <div class="row typecho-page-main" role="form">
        <div class="col-mb-12 col-tb-6 col-tb-offset-3">
          <t-form :rules="rules" :model="model" ref="tform">
            <t-form-item
              prop="username"
              label="用户名"
              description="此用户名将作为用户登录时所用的名称.<br />请不要与系统中现有的用户名重复."
            >
              <t-input
                v-model="model.username"
                placeholder="请输入用户名"
              ></t-input>
            </t-form-item>
            <t-form-item
              prop="email"
              label="电子邮箱地址"
              description="电子邮箱地址将作为此用户的主要联系方式.<br />请不要与系统中现有的电子邮箱地址重复."
            >
              <t-input
                v-model="model.email"
                placeholder="请输入邮箱地址"
              ></t-input>
            </t-form-item>
            <t-form-item
              prop="screenName"
              label="用户昵称"
              description="用户昵称可以与用户名不同, 用于前台显示.<br />如果你将此项留空,将默认使用用户名."
            >
              <t-input
                v-model="model.screenName"
                placeholder="请输入用户昵称"
              ></t-input>
            </t-form-item>
            <t-form-item
              prop="password"
              label="用户密码"
              description="为此用户分配一个密码.<br />建议使用特殊字符与字母、数字的混编样式,以增加系统安全性."
            >
              <t-input
                type="password"
                v-model="model.password"
                placeholder="请输入用户密码"
              ></t-input>
            </t-form-item>
            <t-form-item
              prop="confirm"
              label="用户密码确认"
              description="请确认你的密码, 与上面输入的密码保持一致."
            >
              <t-input
                type="password"
                v-model="model.confirm"
                placeholder="请输入用户密码确认"
              ></t-input>
            </t-form-item>
            <t-form-item
              prop="url"
              label="个人主页地址"
              description="此用户的个人主页地址, 请用 <code>http://</code> 开头."
            >
              <t-input
                v-model="model.url"
                placeholder="请输入个人主页地址"
              ></t-input>
            </t-form-item>
            <t-form-item
              prop="group"
              label="用户组"
              description="不同的用户组拥有不同的权限.<br />具体的权限分配表请<a href='http://docs.typecho.org/develop/acl'
                    target='_blank'
                    >参考这里</a
                  >."
            >
              <t-input
                v-model="model.group"
                placeholder="请输入用户组"
              ></t-input>
            </t-form-item>

            <t-form-item>
              <button @click="addUser">增加用户</button>
            </t-form-item>
          </t-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { create as addUser } from "@/api/user";

import tForm from "@/components/tform";
import tFormItem from "@/components/tform/t-form-item";
import tInput from "@/components/tform/t-input";
export default {
  name: "userAdd",
  components: {
    "t-form": tForm,
    "t-form-item": tFormItem,
    "t-input": tInput,
  },
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
      rules: {
        username: [{ required: true, message: "必须输入用户名" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "input" }],
      },
    };
  },
  methods: {
    submit() {
      this.$refs.tform.validate((isValid) => {
        if (isValid) {
          // console.log(1);
          this.$layer.popup("校验成功；");
        } else {
          // console.log(2);
          this.$layer.popup("电子邮箱地址错误", "error");
        }
      });
    },
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