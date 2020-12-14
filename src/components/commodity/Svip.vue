<template>
  <div>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/svip/sviplist">
            <i class="el-icon-menu"></i>
            <span slot="title">会员列表</span>
          </el-menu-item>
          <el-menu-item index="/svip/class">
            <i class="el-icon-menu"></i>
            <span slot="title">会员等级</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <!-- <echarts /> --><mianbaoxie />
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