<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-25 21:04:49
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 10:31:07
-->
<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "t-form",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {},
    rules: {},
  },
  created() {
    this.fields = [];
    this.$on("FormItem.init", function (formItem) {
      this.fields.push(formItem);
    });
    this.$on("validate", this.validate);
  },
  methods: {
    validate() {
      return this.fields.reduce(function (promise, formItem) {
        return promise.then(function () {
          return formItem.validate();
        });
      }, Promise.resolve());
    },
  },
};
</script>

<style>
</style>