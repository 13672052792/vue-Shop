<template>
  <div id="home">
    <nav-bar class="nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll class="content" ref="scroll" :probe-type='3' @scroll="contentScroll"> 
      <home-swoper :banners="banners"></home-swoper>
      <home-recommend :recommends="recommends"></home-recommend>
      <feature-view></feature-view>
      <tab-control :control="['流行','新款','精选']" class="control-style" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  //引入头部公共组件
  import NavBar from 'components/common/navbar/NavBar'
  //引入Scroll公共组件，用作用户手指滚动
  import Scroll from 'components/common/scroll/Scroll'
  //引入选择导航 内容公共组件
  import TabControl from 'components/context/tabcontrol/TabControl'
  //引入导航内容展示 内容公共组件
  import GoodsList from 'components/context/goods/GoodsList'
  //引入返回头部组件
  import BackTop from 'components/context/backtop/BackTop'
  

  //引入轮播组件 对公共轮播进行了封装
  import HomeSwoper from './childComps/HomeSwiper'
  //引入特别活动组件（轮播下面）
  import HomeRecommend from './childComps/HomeRecommend'
  //引入本周流行组件
  import FeatureView from './childComps/FeatureView'


  //引入axios请求封装数据 
  import { getHomeMultidata, getHomeGoods } from 'network/home'

  export default {
    components: {
      NavBar,
      Scroll,
      TabControl,
      GoodsList,
      BackTop,
      HomeSwoper,
      HomeRecommend,
      FeatureView
    },
    data() {
      return {
        // resule: null,
        banners: [],
        recommends: [],
        goods: {
          'pop': { page: 0, list: [] },
          'new': { page: 0, list: [] },
          'sell': { page: 0, list: [] },
        },
        currentType: 'pop',
        isShowBackTop: false
      }
    },
    computed: { //计算
      showGoods() {
        return this.goods[this.currentType].list
      }
    },
    created() { //生命周期函数，加载时就调用
      //请求多个数据
      this.getHomeMultidataA()

      this.getHomeGoodsA('pop')
      this.getHomeGoodsA('new')
      this.getHomeGoodsA('sell')
    },
    methods: {
      /**
       *实践监听相关方法
       */
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break
          case 1:
            this.currentType = 'new'
            break
          case 2:
            this.currentType = 'sell'
            break
        }
      },

      //取到Scroll传出的值,在首页监听滚动位置
      contentScroll(position) {
        this.isShowBackTop = (-position.y) > 1000
      },

      backTopClick() {
        this.$refs.scroll.scrollTo(0, 0, 500)
      },

      /**
       *网络请求相关方法
       */
      getHomeMultidataA() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
      },
      getHomeGoodsA(type) {
        const page = this.goods[type].page + 1;
        getHomeGoods(type, page).then(res => {
          // console.log(res)
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page + 1
        })
      }
    },
  }

</script>

<style scoped>
  #home {
    padding-top: 44px;
  }
  
  .nav-bar {
    background-color: var(--color-high-text);
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 2;
  }
  
  .control-style {
    position: sticky;
    top: 44px;
    z-index: 2;
  }

  .content{
    position: absolute;
    top:44px;
    bottom: 49px;
    left:0px;
    right: 0px;
    overflow: hidden;
  }
</style>