<template>
  <div>
    <!-- 显示所有出传递参数的集合，除了props中定义的 -->
    {{$attrs}}
    <button @click="fn">按钮</button>
    <!-- 通过v-bind将参数传递给子元素 -->
    <!-- 通过v-on将事件传递给子元素 -->
    <sunListeners v-bind='$attrs'
                  v-on="$listeners"></sunListeners>
  </div>
</template>
<script>
import sunListeners from './sunListeners.vue'
export default {
  // inheritAttrs默认是true,将传递的值，会以自定义属性的方式在的当前组件上
  // 如果为false将不显示
  inheritAttrs: false,
  props: {
    a: {
      type: String,
      default: '0'
    }
  },
  components: {
    sunListeners
  },
  methods: {
    fn () {
      this.$listeners.click();
    }
  }
}
</script>

