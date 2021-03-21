<template>
  <div class="img-list">
    <ul id="container">
      <li v-for="(img,index) in list"
          :key="index">
        <img v-lazy="img.src">
      </li>
    </ul>
  </div>

</template>
<script>
import { arr } from './img.js'
export default {
  data () {
    return {
      list: arr
    }
  },
  methods: {

  },
  mounted () {

  }
}
</script>
<style scoped>
.img-list {
  width: 200px;
  height: 500px;
  overflow: scroll;
}
</style>


