<template>
   <transition>
      <!-- 对话框遮罩层 -->
    <div class="lc-dialog__wrapper" @click.self="handleClose" v-show="visible">
      <div class="lc-dialog" :style = "{ width, marginTop: top }">
      <!-- 对话框头部 -->
        <div class="lc-dialog__header">
          <slot name="title">
            <span class="lc-dialog__title">{{title}}</span>
          </slot>
          <button class="lc-dialog__headerBtn" @click="handleClose">
            <i class="lc-icon-close"></i>
          </button>
        </div>
        <!-- 主体部分 -->
        <div class="lc-dialog__body">
        <!-- 默认插槽 -->
          <slot>这是一段信息</slot>
        </div>
        <!-- 对话框底部 -->
        <div class="lc-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
   </transition>
</template>

<script>
export default {
  name: 'LcDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
<style lang="scss" scoped>
.lc-dialog__wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2003;
    background:rgba(0,0,0,.5);
}
.lc-dialog{
  position: relative;
    margin: 0 auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.3);
    box-sizing: border-box;
    margin-top: 15vh;
    width: 30%;
    .lc-dialog__header {
      padding: 20px 20px 10px;
      .lc-dialog__title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .lc-dialog__headerBtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        color: #909399;
        &:hover .lc-icon-close{
          color: #409eff;
        }
      }
    }
    .lc-dialog__body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    .lc-dialog__footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .dialog-footer{
        text-align: right;
      }
    }
}
.v-enter-active{
  animation: fade .2s;
}
.v-leave-active{
  animation: fade .2s reverse;
}
@keyframes fade {
  0%{opacity: 0; transform: translate(0,-15px);}
  100%{}
}
</style>
