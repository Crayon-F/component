<template>
  <div>
    <el-menu>
      <el-menu-item>根1</el-menu-item>
      <el-submenu>
        <template slot="title">根2</template>
        <el-menu-item index="2-1">根2-1</el-menu-item>
        <el-menu-item index="2-2">根2-2</el-menu-item>
        <el-menu-item index="2-3">根2-3</el-menu-item>
      </el-submenu>
      <el-menu-item>根3</el-menu-item>
      <el-menu-item>根4</el-menu-item>
    </el-menu>
  </div>
  <!-- <ul>
    <li>根1</li>
    <li>
      <div>根2</div>
      <ul>
        <li>根2-1</li>
        <li>根2-2</li>
        <li>根2-3</li>
      </ul>
    </li>
    <li>根3</li>
    <li>根4</li>
  </ul> -->
</template>
<script>
import elMenuItem from './el-menu-item'
import elMenu from './el-menu'
import elSubmenu from './el-submenu'
export default {
  name:'menu',
  components: {
    'el-menu-item':elMenuItem,
    'el-menu':elMenu,
    'el-submenu':elSubmenu
  },
}
</script>