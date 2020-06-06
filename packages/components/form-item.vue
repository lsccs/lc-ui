<template>
  <div class="lc-form-item" :class="'lc-form--label-' + Form.labelPosition ">
    <label class="lc-form-item__label" :style="{ width: Form.labelWidth }">{{label}}</label>
    <div class="lc-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LcFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>
<style lang="scss" scoped>
.lc-form-item {
    margin-bottom: 22px;
    .lc-form-item__label {
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .lc-form-item__content {
      line-height: 40px;
      position: relative;
      font-size: 14px;
    }
    &.lc-form--label-top .lc-form-item__label {
      float: none;
      display: inline-block;
      text-align: left;
      padding: 0 0 10px;
    }
}
</style>
