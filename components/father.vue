
<template>
  <div>
    <p>father:{{num}}</p>
    <!-- 第一种,传入函数 -->
    <!-- <son1 :num='num'
          :changeNum='changeNum'></son1> -->
    <!-- 第二种，自定义函数 -->
    <!-- <son1 :num='num'
          @changeNum='changeNum'></son1> -->
    <!-- 第三种，v-model-->
    <!-- <son1 v-model="num"></son1> -->
    <!-- 第四种，.sync和update的语法糖 -->
    <!-- <son1 :num.sync="num"></son1> -->

    <son2 @eat='eat'></son2>
    <button @click="$broadcast('fn','sun','123')">祖先组件调用孙子组件的</button>
    <!-- listeners和attrs方式 -->
    <listeners a=1
               b=2
               c=3
               @click="fnListeners"></listeners>

    <!--ref的方式 -->
    <ref ref="diaglog"></ref>
    <button @click="diaglog">ref的方式</button>

    <!-- eventBus -->
    <eventBus></eventBus>
    <button @click="eventBus">eventBus</button>

    <!-- slot -->
    <me-slot>
      <!-- v-slot必须是template模式 -->
      <template v-slot:header="{a,b,c}">
        header内容 a:{{a}} b:{{b}} c:{{c}}
      </template>
      <template v-slot:content>content内容</template>
      <template v-slot:footer>footer内容</template>
    </me-slot>
  </div>
</template>
<script>
// son1父子传递
// import son1 from './son1'

// son2父子孙传递
import son2 from './son2'

// attrs和listeners
import listeners from './listeners'

// ref
import ref from './ref'

// eventBus
import eventBus from './eventBus'

// slot
import slot from './slot'

export default {
  // 1.父像孙子传值，可以通过provideh和inject方式
  provide () { //提供者，将自己的data暴露出去
    return { parent: this }
  },
  // 2.通过$parent（父组件）和$children(子组件)
  components: {
    // son1,
    son2,
    listeners,
    ref,
    eventBus,
    'me-slot': slot
  },
  name: "father",
  data () {
    return {
      num: 10,
    }
  },
  methods: {
    changeNum (data) {
      this.num = data
    },
    eat (data) {
      console.log('吃饭，睡觉，打豆豆', data)
    },
    fnListeners (data) {
      console.log('fnListeners', data)
    },
    diaglog () {
      this.$refs.diaglog.change()
    },
    eventBus () {
      this.$eventBus.$emit('自定义的名称', { name: "小明", age: 10 })
    }
  }
}
</script>

