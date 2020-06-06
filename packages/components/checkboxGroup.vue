<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LcCheckboxGroup',
  provide () {
    return {
      checkboxGroup: this
    }
  },
  props: {
    value: {
      type: Array
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
