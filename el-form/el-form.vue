<template>
  <form @submit.prevent>
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
  },
  methods: {
    // 去校验表单中的所有得item是否校验通过
    async validate (cb) {
      let children = this.$children;
      let arr = []
      function findChildren (children) {
        children.forEach(item => {
          if (item.$options.name === 'el-form-item') {
            arr.push(item)
          }
          if (item.$children) {
            findChildren(item.$children)
          }
        })
      }
      findChildren(children)
      console.log(arr)
      try {
        await Promise.all(arr.map(item => item.validate()))
        cb(true)
      } catch (error) {
        cb(false)
      }

    },
    onSubmit: function () {
      // 阻止默认表单提交
      // 做你自己想做的事，比如ajax请求后台数据
      return false;
    }
  }
}
</script>

