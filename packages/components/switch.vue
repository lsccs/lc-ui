<template>
  <div class="lc-switch" :class="{ 'is-checked': value, 'is-disabled': disabled }" @click="handle">
    <input type="checkbox" :disabled="disabled" :name="name" :checked="value" class="lc-switch__input">
    <span class="lc-switch__core" :style="[value ? { backgroundColor: activeColor, borderColor: activeColor } : { backgroundColor: inactiveColor, borderColor: inactiveColor }]" ></span>
  </div>
</template>

<script>
export default {
  name: 'LcSwitch',
  data () {
    return {
    }
  },
  props: {
    value: {
      type: Boolean
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    }
  },
  mounted () {
  },
  methods: {
    handle () {
      if (!this.disabled) {
        this.$emit('input', !this.value)
        this.$emit('change')
      }
    },
    change (e) {
      this.$emit('change', e)
    }
  }
}
</script>
<style lang="scss" scoped>
.lc-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
    &.is-disabled {
      opacity: .6;
    }
    &.is-disabled .lc-switch__core{
      cursor: not-allowed;
    }
    .el-switch.is-checked .el-switch__core {
      border-color: #409eff;
      background-color: #409eff;
    }
    &.is-checked .lc-switch__core {
      border-color: #409eff;
      background-color: #409eff;
    }
    &.is-checked .lc-switch__core:after {
      left: 100%;
      margin-left: -17px;
    }
  .lc-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    &:after {
      content: "";
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
  .lc-switch__input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
}
</style>
