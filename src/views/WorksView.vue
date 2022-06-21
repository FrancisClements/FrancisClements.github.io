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
    },
    mounted () {
    window.scrollTo(0, 0)
    }
}
</script>

<template>
<div class="works">
    <div class="demo-reel">
        <h1 class="header">Demo Reel</h1>
        <div class="video-container">
            <iframe src="https://drive.google.com/file/d/1u5EggBv8JbKGjStqDr5zOkKsnLUuu-Rn/preview" frameborder="0" allowfullscreen></iframe>
        </div>
    </div>
    <h1 class="header">Works</h1>
    <div class="flex-list">
        <WorkCardVue
            v-for="w in works"
            :title="w.title"
            :desc="w.desc"
            :img_src="img_dir + w.src"
            :links="w.links"
            :tags="w.tags"
        />
    </div>
</div>
</template>

<style>
.works{
    padding: var(--section-y-padding) var(--section-padding);
}

.demo-reel{
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--reel-margin) 0;
}

/*i-frame css code*/

.video-container {
    position: relative;
    height: var(--reel-height);
    width: 100%;
    overflow: hidden;
    border: 1px solid var(--blue-accent2);
}

.video-container iframe,
.video-container object,
.video-container embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

@media (min-width: 851px), (orientation: landscape){
    .demo-reel{
        --reel-margin: 3em;
    }
    .video-container{
        --reel-height: 715px;
    }
}
@media (orientation: portrait) and (min-width: 551px) and (max-width: 850px){
    .demo-reel{
        --reel-margin: 1em;
    }
    .video-container{
        --reel-height: 360px;
    }
}
</style>