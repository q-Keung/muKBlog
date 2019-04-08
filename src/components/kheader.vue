<template>
    <div class="mu-appbar-header">
        <mu-appbar style="width: 100%;" color="primary" title="keung">
            <mu-button class="subject-btn" icon slot="left" @click="changeSlider">
                <mu-icon value="subject"></mu-icon>
            </mu-button>
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
    </div>
</template>

<script>
    export default {
        data() {
            return {
                open:true
            }
        },
        methods: {
            changeSlider(){
                console.log('e');
                this.$emit('open',this.open)
            }
        },
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
</style>