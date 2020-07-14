<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <home-swoper :banners="banners"></home-swoper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwoper from './childComps/HomeSwiper'

  import {getHomeMultidata} from 'network/home'

  export default {
    components:{
      NavBar,
      HomeSwoper
    },
    data() {
      return {
        // resule: null,
        banners: [],
        recommends: []
      }
    },
    created() {
      //请求多个数据
      getHomeMultidata().then(res => {
        // console.log(res);
        // this.resule = res;
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      })
    },
  }

</script>

<style scoped>
.nav-bar{
  background-color: var(--color-high-text);
  color: #fff;
}
</style>