<template>
  <form>
    <slot></slot>
  </form>

</template>
<script>
export default {
  name: 'el-form',
  provide () {
    return { elForm: this }
  },
  props: {
    model: {
      type: Object,
      default: () => ({})
    },
    rules: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

