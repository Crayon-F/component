import Vue from 'vue';
import App from './App.vue';


Vue.prototype.$eventBus = new Vue();

// 向上派发事件
Vue.prototype.$dispatch = function(eventName,componentName,value){
  let parent = this.$parent;
  while(parent){
    if(parent.$options.name === componentName){
      parent.$emit(eventName,value)
      break;
    }
    
    parent = parent.$parent;
  }
}

// 向下派发
Vue.prototype.$broadcast = function(eventName,componentName,value){
  let children = this.$children;
  function broadcast(child){
    for(let i = 0;i<child.length;i++){
      let item = child[i];
      if(item.$options.name === componentName){
        item.$emit(eventName,value)
        break;
      }
      if(item.$children){
        broadcast(item.$children)
      }
    }
  }
  broadcast(children)
}
new Vue({
  el:"#app",
  render:h=>h(App)
});