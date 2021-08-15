<template>
  <div class="typecho-login-wrap">
    <div class="typecho-login">
      <h1><a href="http://typecho.org" class="i-logo">Typecho</a></h1>
      <form
        name="login"
        role="form"
        onSubmit="return false;"
      >
        <p>
          <label for="name" class="sr-only">用户名</label>
          <input
            type="text"
            id="name"
            name="name"
            value=""
            placeholder="用户名"
            class="text-l w-100"
            autofocus=""
          />
        </p>
        <p>
          <label for="password" class="sr-only">密码</label>
          <input
            type="password"
            id="password"
            name="password"
            class="text-l w-100"
            placeholder="密码"
          />
        </p>
        <p class="submit">
          <button type="submit" class="btn btn-l w-100 primary">登录</button>
          <input
            type="hidden"
            name="referer"
            value="http://127.0.0.2/admin/options-general.php"
          />
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
export default {
  name: "login",
};
</script>

<style>
</style>