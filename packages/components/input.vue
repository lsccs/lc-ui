<template>
  <div :style="{ width: width, height: height }" class="lc-input" :class="{ 'isdisabled': disabled }" @mouseover="showClear" @mouseleave="unShowClear" @foucs="clearFoucs" >
      <span ref="iconleft" v-if="iconLeft && type !== 'textarea'" class="lc-icon__suffix icon-lr-inner">
        <i :class="iconLeft"></i>
      </span>
      <input v-if="type !== 'textarea'" ref="input" :name="name" :type="showPassword ? (isShow ? 'text' : 'password') : type" :disabled="disabled" :placeholder="placeholder" class="lc-input__inner" :value="value" :maxlength="maxLength" @input="handleInput" @blur="blur">
      <span ref="icon" v-if="showSuffix && type !== 'textarea'" class="lc-input__suffix">
        <i class="lc-icon-circle-close" :class="{ 'isPadding': clearable && showPassword }" v-if="clearable && value" v-show="isShowClear" @click="handleClear">
        </i>
        <i class="lc-icon-view" :class="{ 'show-active': isShow }" v-if="showPassword && value" v-show="isShowClear" @click="handleShowPassword">
        </i>
        <span v-if="maxLength" v-show="showLimit" class="lc-input__count">
          <span class="lc-input__count-inner" v-text="count"></span>
        </span>
        <span v-if="iconRight && type !== 'textarea'" class="icon-lr-inner lc-icon__suffix-r">
          <i :class="iconRight"></i>
        </span>
      </span>
      <div class="lc-textarea" v-if="type === 'textarea'">
        <textarea :style="{ minHeight: parseInt(row) * 33 + 'px' }" ref="area" :class="{ 'auto-size__area': autoSize }" :name="name" class="lc-textarea__inner" :placeholder="placeholder" :disabled="disabled" :maxlength="maxLength" @input="handleInput" @blur="blur" :value="value"></textarea>
        <span ref="icon" v-if="showSuffix && type === 'textarea'" class="lc-area__suffix">
          <i class="lc-icon-circle-close" :class="{ 'isPadding': clearable && showPassword }" v-if="clearable && value" v-show="isShowClear" @click="handleClear">
          </i>
          <span v-if="maxLength" v-show="showLimit" class="lc-input__count">
            <span class="lc-input__count-inner" v-text="count"></span>
          </span>
        </span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LcInput',
  data () {
    return {
      isShow: false,
      count: '',
      isShowClear: false,
      scroll: '',
      on: true
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: null,
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    maxLength: {
      type: String,
      default: ''
    },
    showLimit: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '180px'
    },
    height: {
      type: String,
      default: '40px'
    },
    autoSize: {
      type: Boolean,
      default: false
    },
    row: {
      type: String,
      default: '1'
    },
    iconLeft: {
      type: String,
      default: ''
    },
    iconRight: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.type !== 'textarea') {
      this.count = `${this.$refs.input.value.length}/${this.maxLength}`
    } else {
      this.count = `${this.$refs.area.value.length}/${this.maxLength}`
    }
    this.$nextTick(() => {
      if (this.type === 'textarea' && this.$refs.icon) {
        const height = this.$refs.icon.clientHeight
        this.$refs.area.style.paddingBottom = height + 'px'
        return false
      }
      if (this.iconLeft && this.type !== 'textarea') {
        const width = this.$refs.iconleft.clientWidth
        this.$refs.input.style.paddingLeft = width + 5 + 'px'
      }
      if (this.$refs.icon) {
        const width = this.$refs.icon.clientWidth
        this.$refs.input.style.paddingRight = width + 10 + 'px'
      }
    })
  },
  methods: {
    handleInput (e) {
      this.count = `${e.target.value.length}/${this.maxLength}`
      this.$emit('input', e.target.value)
      this.isShowClear = true
      if (this.type !== 'textarea') {
        this.$nextTick(() => {
          const width = this.$refs.icon.clientWidth
          this.$refs.input.style.paddingRight = width + 10 + 'px'
        })
        return false
      }
      if (this.autoSize && this.type === 'textarea') {
        if (this.on) {
          this.scroll = this.$refs.area.clientHeight
          this.on = false
        }
        const newHeight = this.$refs.area.scrollHeight
        const top = this.$refs.area.scrollTop
        if (this.scroll !== newHeight) {
          this.$refs.area.style.height = newHeight - top + 'px'
        }
      }
    },
    blur (e) {
      this.$emit('blur', e)
    },
    handleClear () {
      this.count = `0/${this.maxLength}`
      this.$emit('input', '')
      if (this.type === 'textarea') {
        this.$refs.area.style.height = parseInt(this.row) * 33 + 'px'
      }
      this.$nextTick(() => {
        if (this.type !== 'textarea') {
          const width = this.$refs.icon.clientWidth
          this.$refs.input.style.paddingRight = width + 10 + 'px'
        }
      })
    },
    handleShowPassword () {
      this.isShow = !this.isShow
    },
    showClear () {
      if (this.type !== 'textarea' && this.$refs.input.value !== '') {
        this.isShowClear = true
      }
      if (this.type === 'textarea' && this.$refs.area.value !== '') {
        this.isShowClear = true
      }
    },
    clearFoucs () {
      if (this.type !== 'textarea' && this.$refs.input.value !== '') {
        this.isShowClear = true
      }
    },
    unShowClear () {
      this.isShowClear = false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword || this.showLimit
    }
  }
}
</script>

<style lang="scss" scoped>
  .lc-input{
    position: relative;
    font-size: 14px;
    display: inline-block;
    cursor: pointer;
    &::-webkit-scrollbar {
      z-index: 11;
      width: 6px;
    }
    &:hover{
      .lc-input__inner{
        border-color: #c0c4cc;
      }
      .lc-textarea__inner{
        border-color: #c0c4cc;
      }
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      width: 6px;
      background: #b4bccc;
    }
    &::-webkit-scrollbar-corner, &::-webkit-scrollbar-track {
      background: #fff;
    }
    &::-webkit-scrollbar-track-piece {
      background: #fff;
      width: 6px;
    }
    &.isdisabled{
      .lc-input__inner, .lc-textarea__inner{
        background-color: #f5f7fa;
        border-color: #e4e7ed;
        color: #c0c4cc;
        cursor: not-allowed;
      }
    }
  }
  .lc-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 100%;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    cursor: pointer;
    width:100%;
    &:focus{
      outline: none;
      border-color: #409eff !important;
    }
  }
  .lc-input__suffix{
    position:absolute;
    right:5px;
    top:0;
    height:100%;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
    display:flex;
    align-items:center;
    z-index:1002;
    .lc-input__count{
      height: 100%;
      display: inline-flex;
      align-items: center;
      color: #909399;
      font-size: 12px;
      .lc-input__count-inner{
        background: #fff;
        line-height: normal;
        display: inline-block;
        padding: 0 5px;
      }
    }
    i{
      pointer-events: all;
      transition: all .3s;
      &:hover{
        color: #909399;
      }
    }
    .isPadding{
      margin-right:5px;
    }
  }
  .lc-icon__suffix{
    position:absolute;
    left:5px;
    top:0;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
    display:flex;
    align-items:center;
    justify-content: center;
    z-index:1002;
  }
  .lc-icon__suffix-r{
    display:flex;
    align-items:center;
    justify-content: center;
    text-align: center;
  }
  .icon-lr-inner{
    width:25px;
    font-size:14px;
    height:100%;
    vertical-align: center;
  }
  .lc-area__suffix {
    position:absolute;
    right:8px;
    bottom: 3px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    pointer-events: none;
    display:flex;
    align-items:center;
    z-index:1002;
    .lc-input__count{
      height: 100%;
      display: inline-flex;
      align-items: center;
      color: #909399;
      font-size: 12px;
      .lc-input__count-inner{
        background: #fff;
        line-height: normal;
        display: inline-block;
        padding: 0 5px;
      }
    }
    i{
      pointer-events: all;
      transition: all .3s;
      &:hover{
        color: #909399;
      }
    }
    .isPadding{
      margin-right:5px;
    }
  }
  .show-active{
    color:#409eff !important;
  }
  .lc-textarea {
    position: relative;
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
    font-size: 14px;
    .auto-size__area {
      overflow:hidden;
      resize: none !important;
    }
    .lc-textarea__inner{
      font-family: inherit;
      min-height: 33px;
      display: block;
      resize: vertical;
      padding: 5px 15px;
      line-height: 1.5;
      box-sizing: border-box;
      width: 100%;
      font-size: inherit;
      color: #606266;
      background-color: #fff;
      background-image: none;
      border: 1px solid #dcdfe6;
      border-radius: 4px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      &:focus{
        outline: none;
        border-color: #409eff !important;
      }
    }
  }
</style>
