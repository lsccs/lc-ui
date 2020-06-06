<template>
  <label class="lc-radio" :class="{ 'is-checked': label === (radioGroup.value ? radioGroup.value : value) }">
    <span class="lc-radio__input">
      <span class="lc-radio__inner"></span>
      <input type="radio" class="lc-radio__original" :name="name" :value="label" v-model="model">
    </span>
    <span class="lc-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
</template>
<script>
export default {
  name: 'LcRadio',
  inject: {
    radioGroup: {
      default: ''
    }
  },
  mounted () {
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.radioGroup.value : this.value
      },
      set (v) {
        this.isGroup ? this.radioGroup.$emit('input', v) : this.$emit('input', v)
      }
    },
    isGroup () {
      return !!this.radioGroup
    }
  }
}
</script>
<style lang="scss" scoped>
.lc-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: none;
    font-size: 14px;
    margin-right:30px;
    &.is-checked .lc-radio__input .lc-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &:after{
        transform: translate(-50%,-50%) scale(1);
      }
    }
    &.is-checked .lc-radio__input+.lc-radio__label {
      color: #409eff;
    }
    .lc-radio__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
        .lc-radio__inner {
            border: 1px solid #dcdfe6;
            border-radius: 100%;
            width: 14px;
            height: 14px;
            background-color: #fff;
            position: relative;
            cursor: pointer;
            display: inline-block;
            box-sizing: border-box;
            transition: .2s;
            &:hover {
              border-color: #409eff;
            }
            &:after{
              width: 4px;
              height: 4px;
              border-radius: 100%;
              background-color: #fff;
              content: "";
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%,-50%) scale(0);
              transition: transform .15s ease-in;
            }
        }
        .lc-radio__original {
          opacity: 0;
          outline: none;
          position: absolute;
          z-index: -1;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: 0;
        }
    }
    .lc-radio__label {
      font-size: 14px;
      padding-left: 10px;
    }
}
</style>
