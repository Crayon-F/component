<template>
  <div>
    <!-- <el-form></el-form>
    <elMenu></elMenu> -->
    <v-lazy></v-lazy>
    <render></render>
  </div>
</template>
<script>
// import elForm from './el-form/index'
// import elMenu from './el-menu/index'
import vLazy from './v-lazy/index'
import render from './render/index'
export default {
  components: {
    // elForm,
    // elMenu,
    vLazy,
    render
  }
}
</script>

