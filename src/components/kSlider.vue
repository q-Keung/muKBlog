<template>
  <div class="k-slider">
    <!-- <mu-container> -->
    <mu-drawer width="256" :open.sync="open" :docked="isdocked" :right="position === 'right'">
      <mu-list>
        <mu-list-item button @click="changeOpen">
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item @click="open = false" button>
          <mu-list-item-title>Close</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
    <!-- <mu-container> -->
  </div>
</template>
<script>
  export default {
    props: {
      isopen: {
        type: Boolean,
        default:false
      },
      isdocked:{
        type:Boolean, 
      }
    },
    data() {
      return {
        open:true,
        position: 'left'
      }
    },
    methods:{
      changeOpen(){
        console.log("22")
      }
    },
    watch: {
      isopen(n){
        console.log(n);
        this.open = n;
      }
    }
  }
</script>
<style lang="less">
  .k-slider {
    // min-height: 100vh;
  }
  .mu-paper{
    -webkit-transition: all .15s cubic-bezier(.23,1,.32,1);
    transition: all 0.15s cubic-bezier(.23,1,.32,1);
    color: rgba(0,0,0,.87);
    background-color: #fff;
  }
</style>