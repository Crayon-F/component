<template>
  <div>
    <Level t='1'>hellow</Level>
    <Level t='2'>hellow</Level>
    <Level t='3'>hellow</Level>
    <elMenu :list='list'></elMenu>
  </div>
</template>
<script>
import Level from './Level'
import elMenu from './el-menu/index'
export default {
  components:{
    Level,
    elMenu
  },
  data(){
    return{
      list:[{
        title:"根1",
        id:'1',
        children:[{
          title:"根1-1",
          id:'1-1'
        },{
          title:"根1-2",
          id:'1-2'
        },{
          title:"根1-3",
          id:'1-3',
          children:[{
            title:"根1-3-1",
            id:'1-3-1',
          }]
        }]
      },{
        title:"根2",
        id:'2',
        children:[{
          title:"根2-1",
          id:'2-1',
          children:[{
            title:"根2-1-1",
            id:'2-1-1',
          }]
        }]
      },{
        title:"根3",
        id:'3',
      }]
    }
  }
}
</script>