<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    props:{
      probeType:{
        type: Number,
        default: 0
      }
    },
    data(){
      return{
        scroll: null
      }
    },
    mounted() {
      //创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: this.probeType
      })

      //监听滚动的位置
      this.scroll.on('scroll', (position) => {
        // console.log(position);
        this.$emit('scroll',position)//传出
      })
    },
    methods:{
      //设置位置坐标
      scrollTo(x,y,time) {
        this.scroll.scrollTo(x,y,time)
      }
    }
  }

</script>

<style scoped>

</style>