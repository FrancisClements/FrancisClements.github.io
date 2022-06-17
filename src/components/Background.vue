<script>
export default {
    data() {
        return {
            scrollValue:0
        }
    },
    mounted() {
        window.addEventListener("scroll", this.onScroll)
    },
    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll)
    },
    methods: {
        onScroll(e) {
            this.scrollValue = window.top.scrollY * -.1
        }
    }
}
</script>

<template>
    <div class="bg-wrapper">
        <div class="bg-design" 
            :style=" {'background-position-y':scrollValue + 'px'}"></div>
    </div>
</template>

<style>
.bg-wrapper{
    z-index: -1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}
.bg-design{
    position: fixed;
    background: url('img/bg_design.png');
    background-position: center top;
    background-repeat: repeat;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
</style>