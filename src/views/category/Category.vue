<template>
  <div id="category">
    <nav-bar class="nav-bar">
      <div slot="center">分类</div>
    </nav-bar>

    <scroll class="content">
      <p>222</p>
      <ul>
        <li>1111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>1111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>1111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>1111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
        <li>11111111</li>
      </ul>
      
    </scroll>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  export default {
    components: {
      NavBar,
      Scroll
    },
    data() {
      return {
      }
    }
  }

</script>

<style scoped>

  #category{
  }
  .content {
    background-color: red;
    overflow: hidden;
    height: 100%;
    position: absolute;
    top:44px;
    bottom: 49px;
    left:0px;
    right: 0px;
  }
</style>