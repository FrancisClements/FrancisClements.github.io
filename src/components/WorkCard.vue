<script>
import colorTagsJSON from "@/assets/ColorTags.json"
export default {
    props: ['title', 'desc', 'img_src', 'tags'],
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
        <h1 class="header game-title">{{title}}</h1>
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

.game-title{
    font-size: 1.5em;
    border-bottom: 1px solid var(--blue-accent2);
    padding-bottom: 1rem;
}


.tag-container{
    display:flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
    margin:1em 0;
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


@media (min-width: 851px), (orientation: landscape){

}
@media (orientation: portrait) and (max-width: 850px){
    .work-card{
        flex-direction: column;
    }
}
</style>