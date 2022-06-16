<script>
export default {
    props: ['title', 'desc', 'img_src', 'tags'],
    data() {
        return {
            colorTags: {
                unity2D: { color: "var(--blue-accent)", name: "Unity 2D" },
                unreal: { color: "#c2c7f3", name: "Unreal Engine 4" },
                pc: { color: "var(--blue-accent2)", name: "PC" },
                mobile: { color: "#92ddd3", name: "Mobile" },
                cs: { color: "#c98cd8", name: "C#" },
                py: { color: "var(--yellow-accent)", name: "Python" },
                default: {color: "red", name: "Err"}
            }
      }  
    },
    methods: {
        //unpacks the '@/' url
        getImg(path) {
            return new URL('./../' + path, import.meta.url).href
        },

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
        <img :src="getImg(img_src)" :alt="title">
    </div>
    <figcaption class="details">
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
    width: 100%;
}

.tag{
    padding:0 8px;
    border-radius: 20px;
}

figcaption{
    align-items: center;
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