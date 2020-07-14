<template>
  <div>
    <nav-bar class="nav-bar"><div slot="center">购物街</div></nav-bar>
    <swiper>
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import {getHomeMultidata} from 'network/home';

  // import Swiper from 'components/common/swiper/Swiper'
  // import SwiperItem from 'components/common/swiper/SwiperItem'
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    components:{
      NavBar,
      Swiper,
      SwiperItem
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