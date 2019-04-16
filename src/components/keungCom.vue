<template>
    <div v-if="isShowLoading">
        <div ref="keungLoading" class="keung-com">
            <span>k</span>
            <span>e</span>
            <span>u</span>
            <span>n</span>
            <span>g</span>
            <span>粉</span>
            <span>，</span>
            <span>请</span>
            <span>稍</span>
            <span>侯</span>
        </div>
        <div class="loading-mark"></div>
    </div>
</template>

<script>
    function showText({
        dom
    }) {
        let key = 0;
        let elem = dom.querySelectorAll('span');
        let t;

        function timing(fn) {
            t = setTimeout(fn, 500);
        }

        function stop(callback) {
            setTimeout(() => {
                Array.from(elem).map((item, index) => {
                    item.style.fontSize = '20px';
                })
                callback && timing(callback);
            }, 500);
        }

        function st() {
            // document.body.style.overflow = 'hidden';
            do {
                elem[key].style.fontSize = '23px';
                key++;
            } while (key == -1)
            if (key < 10) {
                timing(st);
            } else {
                clearTimeout(t);
                key = 0;
                stop(st);
            }
        }
        timing(st);
    }
    export default {
        props: {
            isShowLoading: {
                type: Boolean
            }
        },
        data() {
            return {
                comText: 'keung者，请稍后'
            }
        },
        created() {

        },
        mounted() {
            let dom = this.$refs.keungLoading;
            if (dom) showText({
                dom
            });
        },
        methods: {

        },
    }
</script>

<style lang="less">
    .keung-com {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        // background:rgb(87, 202, 202);
        text-shadow: 0 0 8px rgb(255, 255, 255);
        text-transform: uppercase;
        padding: 0 20px;
        height: 80px;
        width: 240px;
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        line-height: 80px;
        z-index: 999999;

        span {
            transition: all 0.8s ease-in-out;
        }
    }
</style>