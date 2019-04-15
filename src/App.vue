<template>
  <div id="app">
    <div class="kapp-container">
      <div class="kapp-slider">
        <k-slider></k-slider>
      </div> 
      <div class="kapp-bodyer">
        <k-header></k-header>
        <div class="k-app-view">
          <mu-scale-transition>
            <router-view />
          </mu-scale-transition>
        </div>
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
      }
    },
    methods:{
    },
    mounted () {
      
    }
  }
</script>
<style lang="less">
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .kapp-container {
    box-sizing: border-box;
    display: flex;
    width:100%;
    .kapp-slider{
      // width:100%;
    }
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