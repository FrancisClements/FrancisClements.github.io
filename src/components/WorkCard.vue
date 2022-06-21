<script setup>
import { ItchIo } from "@vicons/fa"
</script>

<script>
import colorTagsJSON from "@/assets/ColorTags.json"

export default {
    props: ['title', 'desc', 'img_src', 'tags', 'links'],
    data() {
        return {
            colorTags: colorTagsJSON
      }  
    },
    methods: {
        //available tags: unity,unreal,pc,mobile,c#,py
        determineTag(tagName) {
            var tag
            if (tagName === "c#") 
                tag = this.colorTags["cs"]
            else
                tag = this.colorTags[tagName]

            if (tag === undefined)
                tag = this.colorTags["default"]

            return tag
        },
        keyExists(link, linkName) {
            var key = Object.keys(link)[0]

            return linkName === key;
        }
    }
}
</script>

<template>
<article class="work-card glass">
    <div class="img-container">
        <img :src="img_src" :alt="title">
    </div>
    <figcaption>
        <div class="heading">
            <h1 class="header game-title">{{title}}</h1>
            <ul class="icon-container">
                <li v-for="link in links" class="icon">
                    <a :href="Object.values(link)[0]">
                    <ItchIo v-if="keyExists(link, 'itchio')"/>
                    </a>
                </li>
            </ul>
        </div>
        <p>{{desc}}</p>
        <ul class="tag-container last-item">
            <li v-for="tag in tags" 
            class="tag" 
            :style="'background:'+determineTag(tag).color">
                {{determineTag(tag).name}}
            </li>
        </ul>
    </figcaption>
</article>
</template>

<style scoped>
.work-card{
    display: flex;
    padding: 1em;
    max-width: 100%;
    
}
.work-card img{
    float: left;
}

.img-container{
    flex: 1 1 200px;
}

.heading{
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--blue-accent2);
}

.game-title{
    font-size: 1.5em;
}

.icon-container{
    align-items: center;
}


.tag-container{
    display:flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom:1em;
}

.tag{
    padding:0 8px;
    border-radius: 20px;
}

figcaption{
    align-items:flex-start;
    flex: 1 1 200px;
    padding: 0 1em;
    display: flex;
    flex-direction: column;
    height: auto;
}

.last-item{
    margin-top: auto;
}

svg{
    height: 1.5rem;
    display: block;
}


@media (min-width: 851px), (orientation: landscape){

}
@media (orientation: portrait) and (max-width: 850px){
    .work-card{
        flex-direction: column;
    }
}
</style>