<script>
export default {
    props: ['name']
}
</script>

<template>
<div class="icon-wrapper">
  <div class="icon-skill">
    <slot/>
  </div>
  <div class="overlay">
    <p class="name">{{name}}</p>
  </div>
</div>
</template>

<style scoped>
.icon-wrapper{
  border-radius: 10px;
  border: 1px solid var(--yellow-accent);
  height: 3em;
  width: 3em;
  padding: 2em;
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .25s ease;
  background-color: rgba(129, 90, 28, .85);
  border-radius: inherit;
}

.name {
  color: var(--bg);
  font-size: 18px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0;
  font-weight: normal;
}

.icon-wrapper:hover .overlay {
  opacity: 1;
}

.icon-skill{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

}
</style>