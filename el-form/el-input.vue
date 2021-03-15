<template>
  <input type="text"
         value=""
         @input="inputInp">
</template>
<script>
export default {
  name: 'el-input',
  data () {
    return {

    }
  },
  methods: {
    inputInp (e) {
      this.$emit('input', e.target.value)
      // 去让el-form-item去校验
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.name === 'el-form-item') {
          break;
        }
        parent = parent.$parent
      }
      if (parent) {
        parent.$emit('validate')
      }

    }
  }
}
</script>

