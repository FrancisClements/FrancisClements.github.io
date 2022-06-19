<script setup>
import WorkCardVue from './../WorkCard.vue';
import ProjectsJSON from "@/assets/ProjectList.json";
</script>

<script>
export default {
    data() {
        return {
            img_dir: ProjectsJSON.img_dir,
            works: ProjectsJSON.works
        }
    },
    computed: {
        selectWorks() {
            return this.works.filter((w) => w.selected);
        }
    }
}
</script>

<template>
<section class="select-works">
    <h1 class="header">Selected Works</h1>
    <div class="flex-list">
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