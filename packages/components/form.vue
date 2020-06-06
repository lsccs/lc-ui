<template>
  <div class="lc-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LcForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: ''
    },
    labelPosition: {
      type: String,
      default: ''
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>
<style lang="scss" scoped>
.lc-form {
    width: 460px;
}
</style>
