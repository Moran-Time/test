<template>
  <div class="home">
    <el-container>
      <el-header>
        <div class="title_top">
          <div class="title_left" style="color: #fff">UNI_ADMIN</div>
          <div class="title_right">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
              router
            >
              <el-menu-item index="/leader">首页</el-menu-item>
              <el-menu-item index="/commodity">商品</el-menu-item>
              <el-menu-item index="/order">订单</el-menu-item>
              <el-menu-item index="/svip">会员</el-menu-item>
              <el-menu-item index="/set">设置</el-menu-item>
              <el-submenu index="6">
                <template slot="title">admin</template>
                <el-menu-item index="6-1" @click="onClickOut"
                  >退出登录</el-menu-item
                >
              </el-submenu>
            </el-menu>
          </div>
        </div>
      </el-header>
      <el-container>
        <router-view />
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    gotoLeader() {
      this.$router.push("/leader");
    },
    onClickOut() {
      localStorage.removeItem("token");
        this.$router.push("/login");
        this.$message.info("退出成功");
    },
  },
};
</script>
<style scoped>
.el-header,
.el-footer {
  background-color: rgb(84, 92, 100);
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 500px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
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
.title_left {
  width: 100px;
}
.title_right {
  width: 700px;
}
.title_top {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>
