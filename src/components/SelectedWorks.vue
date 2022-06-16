<script setup>
import WorkCardVue from './WorkCard.vue';
</script>

<script>
import projectList from "@/assets/projectList.json";
export default {
    data() {
        return {
            img_dir: projectList.img_dir,
            selectWorks: projectList.select_works
        }
    }
}
</script>

<template>
<section class="select-works">
    <h1 class="header">Selected Works</h1>
    <div class="selected-list">
        <WorkCardVue
            v-for="w in selectWorks"
            :title="w.title"
            :desc="w.desc"
            :img_src="img_dir + w.src"
            :tags="w.tags"
        />
    <RouterLink to="/works" class="primary-button more-button">
        More
    </RouterLink>
    </div>
</section>
</template>

<style scoped>
.select-works{
    padding: 0 var(--section-padding);
}

.selected-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    margin: 2rem 0;
}

.more-button{
    padding: .5rem 1.5rem;
    margin:25px auto;
}

@media (min-width: 851px), (orientation: landscape){

}
@media (orientation: portrait), (max-width: 850px){
    .header{
        text-align: center;
    }
}
</style>