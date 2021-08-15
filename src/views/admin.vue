<template>
  <div>
    admin
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "admin",
  created:function () {
    console.log("create");
    console.log(this.$store.state);
    console.log(this.$store.state.admin.name);
  }
};
</script>

<style>
</style>