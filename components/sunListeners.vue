<template>
  <div>
    <p>sunlisteners{{$attrs}}</p>
    <button @click="$listeners.click(10)">通过$listeners触发祖先组件上的方法</button>
  </div>
</template>
<script>
export default {

}
</script>

