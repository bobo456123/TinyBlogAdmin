<!--
 * @Descripttion: 
 * @version: 1.0.0
 * @Author: IT飞牛
 * @Date: 2021-10-25 21:12:35
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-10-31 16:27:39
-->
<template>
  <ul class="typecho-option">
    <li>
      <label for="" v-if="label" class="typecho-label"
        >{{ label }} <template v-if="required">*</template></label
      >
      <slot name="default"></slot>
      <p class="error" v-if="error">{{ error }}</p>
      <p class="description" v-if="description" v-html="description"></p>
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
      this.validate()
        .then(() => {})
        .catch(() => {});
    });
  },
  methods: {
    validate() {
      // 校验, 返回Promise
      return new Promise((r, j) => {
        // 校验规则
        const rules = this.form.rules[this.prop];
        if (!rules) {
          return r();
        }
        // 当前值
        const value = this.form.model[this.prop];

        // 创建一个校验器实例
        const validator = new Validator({ [this.prop]: rules });
        validator.validate(
          { [this.prop]: value },
          { first: true },  //只有一个验证没通过，后面不再继续验证
          (errors) => {
            if (errors) {
              this.error = errors[0].message;
              j(this.error);
            } else {
              this.error = "";
              r();
            }
          }
        );
      });
    },
    //上面的逆向，在上层验证时，一个错就立即停止，方便上层借助Promise.race实现；
    hasInvalid() {
      // 校验, 返回Promise
      return new Promise((r, j) => {
        // 校验规则
        const rules = this.form.rules[this.prop];
        if (!rules) {
          return j();
        }
        // 当前值
        const value = this.form.model[this.prop];

        // 创建一个校验器实例
        const validator = new Validator({ [this.prop]: rules });
        validator.validate(
          { [this.prop]: value },
          { first: true },  //只有一个验证没通过，后面不再继续验证
          (errors) => {
            if (errors) {
              this.error = errors[0].message;
              r(this.error);
            } else {
              this.error = "";
              j();
            }
          }
        );
      });
    },
  },
};
</script>

<style>
</style>