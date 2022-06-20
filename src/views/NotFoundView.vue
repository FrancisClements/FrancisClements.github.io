<template>
<section class="not-found">
    <p>Page Not Found</p>
    <h1>I think this is not what you're looking for.</h1>
    <div class="icon-wrapper">
        <span class="text-404">404</span>
    </div>
</section>
</template>

<style scoped>
.not-found{
    padding: var(--section-y-padding) var(--section-padding);
    text-align:center;
}

.icon{
    max-width: 60%;
    margin: auto;
}

.icon-wrapper{
    background: url("/404_template.png");
    background-repeat: no-repeat;
    background-size: contain;
    width: var(--icon-size);
    height: var(--icon-size);
    margin: auto;
}

.text-404{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    font-size: clamp(3em,8vw,5em);
    color: #CCC;
}

@media (min-width: 851px), (orientation: landscape){
    .icon-wrapper{
        --icon-size: 25em;
    }
}
@media (max-width: 850px){
    .icon-wrapper{
        --icon-size: 10em;
    }
}
</style>