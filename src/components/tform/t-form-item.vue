<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-25 21:12:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 10:29:16
-->
<template>
  <ul id="typecho-option-item-name-0" class="typecho-option">
    <li>
      <label for="" v-if="label" class="typecho-label"
        >{{ label }} <template v-if="required">*</template></label
      >
      <slot name="default"></slot>
      <p class="description" v-if="description" v-html="description"></p>
      <p class="error" v-if="error">{{ error }}</p>
    </li>
  </ul>
</template>

<script>
import Validator from "async-validator";
export default {
  name: "t-form-item",
  inject: ["form"],
  data() {
    return {
      error: "",
    };
  },
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: String,
    description: String,
  },
  computed: {
    required() {
      const rules = this.form.rules[this.prop];
      if (rules) {
        return rules.some(function (rule) {
          return rule.required;
        });
      } else {
        return false;
      }
    },
  },
  created() {
    this.label && this.$parent.$emit("FormItem.init", this);
    this.$on("validate", () => {
      this.validate();
    });
  },
  methods: {
    validate() {
      // 校验规则
      const rules = this.form.rules[this.prop];
      if (!rules) {
        return;
      }
      // 当前值
      const value = this.form.model[this.prop];

      // 创建一个校验器实例
      const validator = new Validator({ [this.prop]: rules });
      // 校验, 返回Promise
      return new Promise((r, j) => {
        validator.validate({ [this.prop]: value }, (errors) => {
          if (errors) {
            console.log("fail: " + this.prop);
            this.error = errors[0].message;
            j(this.error);
          } else {
            console.log("success: " + this.prop);
            this.error = "";
            r();
          }
        });
      });
    },
  },
};
</script>

<style>
</style>