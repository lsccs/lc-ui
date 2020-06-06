<template>
    <div style="display:inline-block;">
      <button :disabled="disabled" @click="handClick" class="lc-button" :class="[`lc-button--${type}`, { 'is-plain': plain }, { 'is-round': round }, { 'is-circle': circle }, { 'is-disabled': disabled }]">
      <i v-if="icon" :class="icon"></i>
      <span v-if="$slots.default"><slot></slot></span>
      </button>
    </div>
</template>

<script>

export default {
  name: 'LcButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: String,
      default: ''
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handClick (e) {
      this.$emit('click', e)
    }
  },
  components: {
  }
}
</script>

<style lang="scss" scoped>
.lc-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover, &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
    &:active{
      color: #3a8ee6;
      border-color: #3a8ee6;
      outline: none;
    }
    &.is-plain{
      &.is-disabled{
        background-color: #fff;
        border-color: #ebeef5;
        color: #c0c4cc;
        &:hover,&:focus,&:active{
          background-color: #fff;
          border-color: #ebeef5;
          color: #c0c4cc;
        }
      }
    }
    &.is-plain:hover,&.is-plain:focus{
      background: #fff;
      border-color: #409eff;
      color: #409eff;
    }
    &.is-plain:active{
      border-color: #3a8ee6;
      color: #3a8ee6;
    }
    &.is-round{
      border-radius: 20px;
      padding: 12px 23px;
    }
    &.is-circle{
      border-radius: 50%;
      padding: 12px;
    }
    &.is-disabled{
      color: #c0c4cc;
      cursor: not-allowed;
      background-image: none;
      background-color: #fff;
      border-color: #ebeef5;
    }
}

.lc-button--primary{
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    &:hover,&:focus{
      background: #66b1ff;
      border-color: #66b1ff;
      color: #fff;
    }
    &:active{
      background: #3a8ee6;
      border-color: #3a8ee6;
      color: #fff;
      outline: none;
    }
    &.is-plain{
      color: #409eff;
      background: #ecf5ff;
      border-color: #b3d8ff;
      &.is-disabled{
        color: #8cc5ff;
        background-color: #ecf5ff;
        border-color: #d9ecff;
        &:hover,&:focus,&:active{
          color: #8cc5ff;
          background-color: #ecf5ff;
          border-color: #d9ecff;
        }
      }
      &:hover,&:focus{
        color: #fff;
        background-color: #409eff;
        border-color: #409eff;
      }
      &:active{
        background: #3a8ee6;
        border-color: #3a8ee6;
        color: #fff;
        outline: none;
      }
    }
    &.is-round{
      border-radius: 20px;
      padding: 12px 23px;
    }
    &.is-circle{
      border-radius: 50%;
      padding: 12px;
    }
    &.is-disabled{
      color: #fff;
      background-color: #a0cfff;
      border-color: #a0cfff;
    }
}
.lc-button--success{
    color: #fff;
    background-color: #67c23a;
    border-color: #67c23a;
    &:hover,&:focus{
      background: #85ce61;
      border-color: #85ce61;
      color: #fff;
    }
    &:active{
      background: #5daf34;
      border-color: #5daf34;
      color: #fff;
      outline: none;
    }
    &.is-plain{
      color: #67c23a;
      background: #f0f9eb;
      border-color: #c2e7b0;
      &:hover,&:focus{
        color: #fff;
        background-color: #67c23a;
        border-color: #67c23a;
      }
      &:active{
        background: #5daf34;
        border-color: #5daf34;
        color: #fff;
        outline: none;
      }
      &.is-disabled{
        color: #a4da89;
        background-color: #f0f9eb;
        border-color: #e1f3d8;
        &:hover,&:focus,&:active{
          color: #a4da89;
          background-color: #f0f9eb;
          border-color: #e1f3d8;
        }
      }
    }
    &.is-round{
      border-radius: 20px;
      padding: 12px 23px;
    }
    &.is-circle{
      border-radius: 50%;
      padding: 12px;
    }
    &.is-disabled{
      color: #fff;
      background-color: #b3e19d;
      border-color: #b3e19d;
    }
}
.lc-button--info{
    color: #fff;
    background-color: #909399;
    border-color: #909399;
    &:hover,&:focus{
      background: #a6a9ad;
      border-color: #a6a9ad;
      color: #fff;
    }
    &:active{
      background: #82848a;
      border-color: #82848a;
      color: #fff;
      outline: none;
    }
    &.is-plain{
      color: #909399;
      background: #f4f4f5;
      border-color: #d3d4d6;
      &.is-disabled{
        color: #bcbec2;
        background-color: #f4f4f5;
        border-color: #e9e9eb;
        &:hover,&:focus,&:active{
          color: #bcbec2;
          background-color: #f4f4f5;
          border-color: #e9e9eb;
        }
      }
      &:hover,&:focus{
        color: #fff;
        background-color: #909399;
        border-color: #909399;
      }
      &:active{
        background: #82848a;
        border-color: #82848a;
        color: #fff;
        outline: none;
      }
    }
    &.is-round{
      border-radius: 20px;
      padding: 12px 23px;
    }
    &.is-circle{
      border-radius: 50%;
      padding: 12px;
    }
    &.is-disabled{
      color: #fff;
      background-color: #c8c9cc;
      border-color: #c8c9cc;
    }
}
.lc-button--warning {
    color: #fff;
    background-color: #e6a23c;
    border-color: #e6a23c;
    &:focus,&:hover{
      background: #ebb563;
      border-color: #ebb563;
      color: #fff;
    }
    &:active{
      background: #cf9236;
      border-color: #cf9236;
      color: #fff;
    }
    &.is-plain{
      color: #e6a23c;
      background: #fdf6ec;
      border-color: #f5dab1;
      &:focus,&:hover{
        color: #fff;
        background-color: #e6a23c;
        border-color: #e6a23c;
      }
      &:active{
        background: #cf9236;
        border-color: #cf9236;
        color: #fff;
      }
      &.is-disabled{
        color: #f0c78a;
        background-color: #fdf6ec;
        border-color: #faecd8;
        &:hover,&:focus,&:active{
          color: #f0c78a;
          background-color: #fdf6ec;
          border-color: #faecd8;
        }
      }
    }
    &.is-round{
      border-radius: 20px;
      padding: 12px 23px;
    }
    &.is-circle{
      border-radius: 50%;
      padding: 12px;
    }
    &.is-disabled{
      color: #fff;
      background-color: #f3d19e;
      border-color: #f3d19e;
    }
}
.lc-button--danger {
    color: #fff;
    background-color: #f56c6c;
    border-color: #f56c6c;
    &:hover,&:focus{
      background: #f78989;
      border-color: #f78989;
      color: #fff;
    }
    &:active{
      background: #dd6161;
      border-color: #dd6161;
      color: #fff;
    }
    &.is-plain{
      color: #f56c6c;
      background: #fef0f0;
      border-color: #fbc4c4;
      &:hover,&:focus{
        color: #fff;
        background-color: #f56c6c;
        border-color: #f56c6c;
      }
      &:active{
        background: #dd6161;
        border-color: #dd6161;
        color: #fff;
      }
      &.is-disabled{
        color: #f9a7a7;
        background-color: #fef0f0;
        border-color: #fde2e2;
        &:hover,&:focus,&:active{
          color: #f9a7a7;
          background-color: #fef0f0;
          border-color: #fde2e2;
        }
      }
    }
    &.is-round{
      border-radius: 20px;
      padding: 12px 23px;
    }
    &.is-circle{
      border-radius: 50%;
      padding: 12px;
    }
    &.is-disabled{
      color: #fff;
      background-color: #fab6b6;
      border-color: #fab6b6;
    }
}
.lc-button [class*='lc-icon-']+span{
  margin-left: 5px;
}
</style>
