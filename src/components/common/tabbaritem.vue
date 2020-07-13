<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="isStyleActive">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'tabbaritem',
    props:{
      push: String,
      activeColor:{
        type:String,
        default: 'red'
      }
    },
    data() {
      return {
      }
    },
    methods: {
      itemClick() {
        this.$router.replace(this.push)
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.push) !== -1
      },
      isStyleActive() {
        return this.isActive ? {color:this.activeColor} : {}
      }
    },
  }

</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    height: 49px;
    text-align: center;
    font-size: 14px;
    color: black;
  }
  
  .tab-bar-item img {
    white: 24px;
    height: 24px;
    vertical-align: middle;
  }
</style>