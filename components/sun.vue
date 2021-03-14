
<template>
  <div>
    <p>sun:{{parent.num}}</p>
    <!-- 1.通过 inject方式得到祖先组件-->
    <!-- <button @click="parent.changeNum(222)">孙更改祖父</button> -->
    <!-- 2.通过 $parent方式,调用父组件的方法-->
    <!-- <button @click="$parent.$emit('eat')">孙更改祖父</button> -->
    <!-- 3.通过 通过自己封装的$dispatch方式,向上调用父组件的方法-->
    <button @click="$dispatch('eat','son2','我就是豆豆')">孙更改祖父</button>
  </div>
</template>
<script>
export default {
  inject: ['parent'],
  name: 'sun',
  methods: {

  }
}
</script>

