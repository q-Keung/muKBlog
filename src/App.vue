<template>
  <div id="app">
    <div class="kapp-container">
      <div class="kapp-slider">
        <k-slider :isopen="isopen"></k-slider>
      </div> 
      <div class="kapp-bodyer">
        <k-header @open="getOpen"></k-header>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
  import kHeader from '@/components/kheader.vue'
  import kSlider from '@/components/kSlider.vue'
  export default {
    components: {
      kHeader,
      kSlider
    },
    data(){
      return{
        isopen:true
      }
    },
    methods:{
      getOpen(open){
        console.log(open);
        this.isopen = open;
      }
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  @import './style/viewPort.less';

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .kapp-container {
    display: flex;
    width:100%;
    .kapp-bodyer {
      flex: 1;
    }
  }

  #nav {
    padding: 30px;
    text-align: center;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>