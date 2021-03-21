import Lazy from './lazy'
export default{
  // install中有两个参数，一个是vue的构造函数，另一个是组件传递的参数
  install(Vue,options){
    const _Vue = Vue;
    // v-lazy是一个指令，需要注册一个指令的方法
    let LazyClass = Lazy(_Vue);
    let lazy = new LazyClass(options)
    _Vue.directive('lazy',{
      // 保证当前的add方法就是执行，this指的是lazy
      bind:lazy.add.bind(lazy)
    })

  }
}