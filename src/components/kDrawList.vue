<template>
    <mu-drawer class="" width="256" :open.sync="open" :docked="docked" :right="position === 'right'">
      <mu-list :value="currentVal" @change="switchSliderItem">
        <mu-list-item button value="1">
          <mu-list-item-title>Menu Item 1</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button value="2">
          <mu-list-item-title>Menu Item 2</mu-list-item-title>
        </mu-list-item>
        <mu-list-item button value="3">
          <mu-list-item-title>Menu Item 3</mu-list-item-title>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
</template>

<script>
export default {
    name:'kDrawList',
    props:{
        open:{
            type:Boolean,
            default:true
        },
        docked:{
            type:Boolean,
            default:true
        }
    },
    data(){
        return{
            currentVal:"1",
            position: 'left'
        }
    },
    methods:{
        switchSliderItem(e){
          console.log(e);
          this.currentVal = e;
        }
    }
}
</script>

<style lang="less">

</style>
