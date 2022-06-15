<script setup>
import WorkCardVue from './WorkCard.vue';
</script>

<script>
export default {
    data() {
        return {
            img_dir: "assets/projects/"
        }
    }
}
</script>

<template>
<section class="select-works">
    <h1 class="header">Works</h1>
    <div class="selected-list">
        <WorkCardVue 
            title="Super Soda Bomber"
            desc="Help Fizzy rescue her girlfriend from the invaders ... and to save the world from total domination!"
            :img_src="img_dir + 'supersoda/main-menu.png'"
        />
    </div>
</section>
</template>

<style scoped>
.select-works{
    padding: 0 var(--section-padding);
}

@media (min-width: 851px), (orientation: landscape){
    .select-works{
        --section-padding: 15vw;
    }
}
@media (orientation: portrait), (max-width: 850px){
    .select-works{
        --section-padding: 0px;
    }
}
</style>