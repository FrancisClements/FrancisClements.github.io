<script>
export default {
    props: ['title', 'desc', 'img_src'],
    methods: {
        //unpacks the '@/' url
        getImg(path) {
            return new URL('./../' + path, import.meta.url).href
        }
    }
}
</script>

<template>
<article class="work-card glass">
    <img :src="getImg(img_src)" :alt="title">
    <figcaption>
        <h1>{{title}}</h1>
        <p>{{desc}}</p>
    </figcaption>
</article>
</template>

<style scoped>

.work-card{
    display: flex;
    padding: 1em;
    
}
.work-card img{
    max-width: 100%;
    float: left;
}

figcaption{
    align-items: center;
    flex: 2;
}


@media (min-width: 851px), (orientation: landscape){

}
@media (orientation: portrait) and (min-width: 850px){

}
</style>