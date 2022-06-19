<script setup>
import WorkCardVue from '../components/WorkCard.vue';
import ProjectsJSON from "@/assets/ProjectList.json"
</script>

<script>
export default {
    data() {
        return {
            img_dir: ProjectsJSON.img_dir,
            works: ProjectsJSON.works
        }
    }
}
</script>

<template>
<div class="works">
    <h1 class="header">Works</h1>
    <div class="flex-list">
        <WorkCardVue
            v-for="w in works"
            :title="w.title"
            :desc="w.desc"
            :img_src="img_dir + w.src"
            :tags="w.tags"
        />
    </div>
</div>
</template>

<style>
.works{
    padding: var(--section-y-padding) var(--section-padding);
}

@media (min-width: 851px), (orientation: landscape){
    :root{
        --grid-items: 2;
    }
}
@media (orientation: portrait) and (min-width: 551px) and (max-width: 850px){
    :root{
        --grid-items: 1;
    }
}
</style>