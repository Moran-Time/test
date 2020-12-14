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
          <el-menu-item index="/order/order">
            <i class="el-icon-menu"></i>
            <span slot="title">订单管理</span>
          </el-menu-item>
          <el-menu-item index="/order/invoiec">
            <i class="el-icon-menu"></i>
            <span slot="title">发票管理</span>
          </el-menu-item>
          <el-menu-item index="/order/after">
            <i class="el-icon-menu"></i>
            <span slot="title">售后服务</span>
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