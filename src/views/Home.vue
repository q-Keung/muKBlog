<template>
  <div class="home">
    <mu-card style="width: 100%;margin: 0 auto;">
      <mu-card-header title="Myron Avatar" sub-title="sub title">
        <mu-avatar slot="avatar">
          <img src="../assets/logo.png">
        </mu-avatar>
      </mu-card-header>
      <mu-card-media title="Image Title" sub-title="Image Sub Title">
        <img src="../assets/p16.jpg">
      </mu-card-media>
      <mu-card-title title="Content Title" sub-title="Content Title"></mu-card-title>
      <mu-card-text>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。
        调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。
        似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，
        找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </mu-card-text>
      <mu-card-actions>
        <mu-button fab small color="#2c3e50" style="margin-right:10px;">
          <mu-icon value="wifi"></mu-icon>
        </mu-button>
        <mu-button fab small color="#2c3e50">
          <mu-icon value="cloud"></mu-icon>
        </mu-button>
      </mu-card-actions>
    </mu-card>
  </div>
</template>

<script>
  // @ is an alias to /src
  // import HelloWorld from "@/components/HelloWorld.vue";

  export default {
    name: "home",
    components: {},
    created() {
      // console.log(this.axios);
    }
  };
</script>
<style lang="less" scoped>
  // @wLen:50vh/2;
  .home {
    width: 100%;
    // padding: 10px;
  }

  .mixin-border {
    border: 1px solid #ccc;
  }

  .home-mian {
    // width:calc(80% + (@wLen-20px));
    .mixin-border();
  }
</style>