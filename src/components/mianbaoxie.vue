<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right" 
    v-if="this.$route.path=='/commodity/list'?true:false">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <!-- <el-breadcrumb-item>{{this.$route.meta.item}}</el-breadcrumb-item> -->
    </el-breadcrumb>
    <el-breadcrumb separator-class="el-icon-arrow-right" 
    v-else>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{this.$route.meta.item}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>