<template>
<div class="select-works">
    <h1>Works</h1>
</div>
</template>

<style scoped>
.select-works{
    display: flex;
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