<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-08-12 22:22:28
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-08-19 00:13:06
-->
<template>
  <div class="typecho-login-wrap">
    <div class="typecho-login">
      <h1><a href="http://typecho.org" class="i-logo">Typecho</a></h1>
      <form role="form" onSubmit="return false;">
        <p>
          <label for="name" class="sr-only">用户名</label>
          <input
            type="text"
            placeholder="用户名"
            class="text-l w-100"
            autofocus=""
            v-model="model.name"
          />
        </p>
        <p>
          <label for="password" class="sr-only">密码</label>
          <input
            type="password"
            class="text-l w-100"
            v-model="model.password"
            placeholder="密码"
          />
        </p>
        <p class="submit">
          <button type="submit" class="btn btn-l w-100 primary" @click="login">
            登录
          </button>
          <button type="submit" class="btn btn-l w-100 primary" @click="user">
            用户
          </button>
          <input type="hidden" name="referer" value="" />
        </p>
        <p>
          <label for="remember"
            ><input
              type="checkbox"
              name="remember"
              class="checkbox"
              value="1"
              id="remember"
            />
            下次自动登录</label
          >
        </p>
      </form>

      <p class="more-link">
        <a href="http://127.0.0.2/">返回首页</a>
      </p>
    </div>
  </div>
</template>

<script>
import { user } from "@/api/user";
export default {
  name: "login",
  data() {
    return {
      model: {
        name: "admin",
        password: "123",
      },
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("user/login", this.model)
        .then(() => {
          console.log("登录成功");
          // this.$router.push({ path: "/admin" });
        })
        .catch(() => {
          console.log("登录失败");
        });
    },
    user() {
      user()
    },
  },
};
</script>

<style>
</style>