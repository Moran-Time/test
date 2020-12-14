<template>
  <div class="leader_container">
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
          <el-menu-item index="/leader/echarts">
            <i class="el-icon-menu"></i>
            <span slot="title">后台首页</span>
          </el-menu-item>
          <el-menu-item index="/leader/photo">
            <i class="el-icon-menu"></i>
            <span slot="title" >相册管理</span>
          </el-menu-item>
          <el-menu-item index="/leader/list">
            <i class="el-icon-menu"></i>
            <span slot="title" >商品列表</span>
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
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    gotoecharts(){
        this.$router.push("/echarts")
        console.log("!1111")
    },
    gotophoto(){
        this.$router.push("/photo")
    },
    gotolist(){
        this.$router.push("/list")
    }
  },
  components: {
   mianbaoxie
  },
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 400px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 400px;
  width: 1070px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>