<template>
  <div class="lc-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LcRadioGroup',
  provide () {
    return {
      radioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>
<style lang="scss" scoped>
.lc-radio-group {
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    font-size: 0;
}
</style>
