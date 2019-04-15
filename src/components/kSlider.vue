<template>
  <div class="k-slider">
    <!-- <mu-container> -->
    <k-draw-list></k-draw-list>
    <!-- <mu-container> -->
  </div>
</template>
<script>
import kDrawList from './kDrawList'
  export default {
    components:{
      kDrawList
    },
    data() {
      return {
      }
    },
    methods:{
      changeOpen(){
        console.log("22")
      }
    },
    watch: {
    }
  }
</script>
<style lang="less">
  .k-slider {
    // min-height: 100vh;
    // width:100%;
  }
  .mu-paper{
  }
</style>