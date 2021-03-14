<template>
  <div>
    {{name}}{{age}}
  </div>
</template>
<script>
export default {
  data () {
    return {
      name: '',
      age: ''
    }
  },
  mounted () {
    this.$eventBus.$on('自定义的名称', ({ name, age }) => {
      console.log(name, age)
      this.name = name;
      this.age = age;
    })
  },
  beforeDestroy () {
    this.$eventBus.off('自定义的名称')
  }
}
</script>
