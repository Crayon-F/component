<template>
  <div v-show="isShow">
    这是一个弹窗
  </div>
</template>
<script>
export default {
  data () {
    return {
      isShow: true
    }
  },
  methods: {
    change () {
      this.isShow = !this.isShow;
    }
  }
}
</script>

