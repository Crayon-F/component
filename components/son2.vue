<template>
  <div>
    <p>son2</p>
    <sun @fn='fn'></sun>
  </div>
</template>
<script>
import sun from './sun'
export default {
  name: 'son2',
  components: {
    sun
  },
  methods: {
    fn (val) {
      console.log('孙子上的方法', val)
    }
  }
}
</script>

