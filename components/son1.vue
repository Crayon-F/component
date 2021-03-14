
<template>
  <div>
    <p>son1:{{num}}</p>
    <button @click="handClick">调用父组件的方法</button>
  </div>
</template>
<script>

export default {
  name: 'son1',
  // 第三种，自定义v-model
  model: {
    prop: 'num', //默认是value类型,可以自定义名称
    event: 'changeNum'//默认是input，可以自定义事件
  },
  props: {
    num: {
      type: Number,
      default: 0
    },
    // 第一种，父组件传入函数
    // changeNum: {
    //   type: Function,
    //   default: () => { }
    // },
  },
  methods: {
    handClick () {
      //第二种自定义函数
      // this.$emit('changeNum', 99)
      // 第四种，sync和update语法糖
      this.$emit('update:num', 99)
    },
  }
}
</script>

