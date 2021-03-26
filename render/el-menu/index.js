
import elMenuItem from './el-menu-item.vue'
import elMenu from './el-menu.vue'
import elSubmenu from './el-submenu.vue'
export default {
  name:'menu',
  components: {
    'el-menu-item':elMenuItem,
    'el-menu':elMenu,
    'el-submenu':elSubmenu
  },
  props:{
    list:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      
    }
  },
  render(){
    let handlerChild = (data)=> {
      return data.map(child=>{
        return child.children ? 
        <el-submenu>
          <template slot="title">{child.title}</template>
          {handlerChild(child.children)}
        </el-submenu>:
        <el-menu-item>{child.title}</el-menu-item>
      })
      
    }
    return(
      <el-menu>
        {
          handlerChild(this.list)
        }
      </el-menu>
    )
  }
}