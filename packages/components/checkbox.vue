<template>
  <label class="lc-checkbox" :class="{ 'is-checked': ischecked }">
    <span class="lc-checkbox__input">
      <span class="lc-checkbox__inner"></span>
      <input type="checkbox" class="lc-checkbox__original" :name="name" :value="label" v-model="model">
    </span>
    <span class="lc-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: 'LcCheckbox',
  inject: {
    checkboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.checkboxGroup.value : this.value
      },
      set (v) {
        this.isGroup ? this.checkboxGroup.$emit('input', v) : this.$emit('input', v)
      }
    },
    isGroup () {
      return !!this.checkboxGroup
    },
    ischecked () {
      return this.isGroup ? this.model.includes(this.label) : this.model
    }
  }
}
</script>
<style lang="scss" scoped>
.lc-checkbox {
    color: #606266;
    font-weight: 500;
    font-size: 14px;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    user-select: none;
    &.is-checked .lc-checkbox__input .lc-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after{
        transform: rotate(45deg) scaleY(1);
      }
    }
    &.is-checked .lc-checkbox__input+.lc-checkbox__label {
      color: #409eff;
    }
    .lc-checkbox__input {
      white-space: nowrap;
      cursor: pointer;
      outline: none;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .lc-checkbox__inner {
          display: inline-block;
          position: relative;
          border: 1px solid #dcdfe6;
          border-radius: 2px;
          box-sizing: border-box;
          width: 14px;
          height: 14px;
          background-color: #fff;
          z-index: 1;
          transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
          &:hover {
              border-color: #409eff;
          }
          &:after {
              box-sizing: content-box;
              content: "";
              border: 1px solid #fff;
              border-left: 0;
              border-top: 0;
              height: 7px;
              left: 4px;
              position: absolute;
              top: 1px;
              transform: rotate(45deg) scaleY(0);
              width: 3px;
              transition: transform .15s ease-in .05s;
              transform-origin: center;
          }
      }
      .lc-checkbox__original {
          opacity: 0;
          outline: none;
          position: absolute;
          margin: 0;
          width: 0;
          height: 0;
          z-index: -1;
      }
    }
    .lc-checkbox__label {
      display: inline-block;
      padding-left: 10px;
      line-height: 19px;
      font-size: 14px;
    }
}
</style>
