<template>
  <div class='goods-list'>
    <goods-list-item v-for="(item,index) in goods" :key="index" :goodsItem="item"/>
  </div>
</template>

<script>
  //引入每个展示块组件
import GoodsListItem from 'components/context/goods/GoodsListItem'

export default {
  props:{
    goods:{
      type: Array,
      default() {
        return []
      }
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style scoped>
  .goods-list{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-around;
    padding: 2px;
  }


</style>