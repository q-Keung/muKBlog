<template>
    <div class="mu-appbar-header">
        <!-- <mu-container> -->
            <mu-row :fill="fill">
                <mu-col class="md-header" md="12" xs="12">
                    <mu-appbar style="width: 100%;" color="primary" title="keung">
                        <mu-button class="subject-btn" icon slot="left" @click="changeSlider">
                            <mu-icon value="subject"></mu-icon>
                        </mu-button>
                        <div id="progress" ref="progress">1</div>
                        <mu-menu slot="right">
                            <mu-button flat>
                                <mu-icon value="face"></mu-icon>
                            </mu-button>
                            <mu-list slot="content">
                                <mu-list-item button>
                                    <mu-list-item-content>
                                        <mu-list-item-title>个人中心</mu-list-item-title>
                                    </mu-list-item-content>
                                </mu-list-item>
                                <mu-list-item button>
                                    <mu-list-item-content>
                                        <mu-list-item-title>退出</mu-list-item-title>
                                    </mu-list-item-content>
                                </mu-list-item>
                            </mu-list>
                        </mu-menu>
                    </mu-appbar>
                </mu-col>
            </mu-row>
            <mu-row>
                <mu-col md="0" xs="12">
                    <div class="xs-slider">
                        <!-- <k-draw-list :open="open" :isdocked="docked"></k-draw-list> -->
                        <mu-drawer class="xs-drawer" width="256" :open.sync="open" :docked="docked" :right="position === 'right'">
                            <mu-list @change="switchList" :value="indexVal">
                                <mu-list-item button value="1">
                                    <mu-list-item-title>Menu Item 1</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button value="2">
                                    <mu-list-item-title>Menu Item 2</mu-list-item-title>
                                </mu-list-item>
                                <mu-list-item button value="3">
                                    <mu-list-item-title>123</mu-list-item-title>
                                </mu-list-item>
                            </mu-list>
                        </mu-drawer>
                    </div>
                </mu-col>
            </mu-row>
        <!-- </mu-container> -->
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
                fill:true,
                open:false,
                docked:false,
                position:'left',
                indexVal:'1'
            }
        },
        methods: {
            changeSlider(){
                console.log('e');
                // this.$emit('open',this.open)
                this.open = !this.open;
            },
            switchList(e){
                console.log(e)
            }
        },
        mounted () {
            let dom = this.$refs.progress;
            function progress(proDom){
                let pro = 0;
                let proHtml = proDom;
                function count(){
                    //每次达到1e3  则递归  优化性能
                    do{
                        pro++;
                        proHtml.innerHTML= pro;
                    }while(pro % 1e3 !=0)
                    if(pro < 1e6){
                        setTimeout(count,0);
                    }
                }
                count();
            }
            // progress(dom);
        },
        destroyed () {
            
        },
        computed: {
        },
        updated () {
        }
    }
</script>

<style lang="less">
    .mu-appbar-header{
        position: fixed;
        left: 256px;
        right: 0;
        top: 0;
        z-index: 101;
        overflow: hidden;
        background: #1976d2;
    }
    .xs-slider{
        .mu-drawer{
            background:#fff;
        }
        .mu-drawer .mu-item-title {
            
            color:black;
        }
    }
</style>