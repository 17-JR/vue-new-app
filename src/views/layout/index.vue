<template>
  <!-- 主页 -->
  <div class="layout-container">
    <!-- 子路由出口 -->
    <router-view></router-view>
    <!-- 底部导航栏 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/qa" icon="search">问答</van-tabbar-item>
      <van-tabbar-item replace to="/video" icon="home-o">视频</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="search">我</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Layout'
}
</script>

<style>
</style>
