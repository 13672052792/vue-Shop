<template>
  <div>
    <nav-bar class="nav-bar">
      <div slot="left" class=""></div>
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  export default {
    components:{
      NavBar
    }
  }

</script>

<style scoped>
.nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
}
</style>