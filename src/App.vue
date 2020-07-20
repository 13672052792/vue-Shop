<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar class="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
  //引入底部导航栏组件 对公共导航栏组件进行了封装
import MainTabBar from 'components/context/maintabbar/MainTabBar'

export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";

  .main-tab-bar{
    z-index: 10;
  }
</style>
