<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/set/basics">
            <i class="el-icon-menu"></i>
            <span slot="title">基础设置</span>
          </el-menu-item>
          <el-menu-item index="/set/logistics">
            <i class="el-icon-menu"></i>
            <span slot="title">物流设置</span>
          </el-menu-item>
          <el-menu-item index="/set/administrator">
            <i class="el-icon-menu"></i>
            <span slot="title">管理员设置</span>
          </el-menu-item>
          <el-menu-item index="/set/deal">
            <i class="el-icon-menu"></i>
            <span slot="title">交易设置</span>
          </el-menu-item>
        
        </el-menu>
      </el-aside>
      <el-main>
       
        <mianbaoxie/>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mianbaoxie from "../mianbaoxie"
export default {
    components:{
      mianbaoxie
    }
}
</script>