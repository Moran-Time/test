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
          <el-menu-item index="/commodity/list">
            <i class="el-icon-menu"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-menu-item index="/commodity/classify">
            <i class="el-icon-menu"></i>
            <span slot="title">分类列表</span>
          </el-menu-item>
          <el-menu-item index="/commodity/specification">
            <i class="el-icon-menu"></i>
            <span slot="title">商品规格</span>
          </el-menu-item>
          <el-menu-item index="/commodity/type">
            <i class="el-icon-menu"></i>
            <span slot="title">商品类型</span>
          </el-menu-item>
          <el-menu-item index="/commodity/critic">
            <i class="el-icon-menu"></i>
            <span slot="title">商品评论</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <echarts /> -->
        <mianbaoxie />
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import mianbaoxie from "../mianbaoxie";
export default {
  components: {
    mianbaoxie,
  },
};
</script>