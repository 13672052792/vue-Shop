<template>
  <div class="tab-control">
    <div v-for="(item,index) in control" 
         :key="index" 
         class="tab-control-item"
         :class="{active: index === controlIndex}"
         @click="itemClick(index)"
         >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    control: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      controlIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.controlIndex = index;
    }
  },
}
</script>

<style scoped>
  .tab-control{
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    background-color: #fff;
  }

  .tab-control-item{
    flex: 1;
  }

  .tab-control-item span{
    padding: 5px;
  }

  .active{
    color: var(--color-high-text);
    
  }

  .active span{
    border-bottom: 3px solid var(--color-tint);
  }


</style>