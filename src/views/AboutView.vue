<script setup>
import { Python, Unity } from '@vicons/fa';
</script>

<template>
  <section class="about">
    <div class="headline">
      <img src="/img/profile.jpg" alt="My Image" class="prof-img">
      <div class="headline-text">
        <h1 class="header">Francis Ivan Clemente</h1>
        <p>... will become a future game and software developer from the Philippines.</p>
      </div>
    </div>
    <p>&nbsp;</p>
    <p>I am currently pursuing B.S Entertainment Multimedia Computing (EMC) at Holy Angel University. I'm expected to graduate sometime at 2023.</p>
    <p>When I'm not coding or building games and applications, I utilize my free time to do other activities like:</p>
    <ul>
      <li>Baking</li>
      <li>Cooking</li>
      <li>Playing video games</li>
      <li>Appreciating animation</li>
    </ul>
    <section class="skillset-wrapper">
      <h1 style="text-align:center">Technical Skillset</h1>
      <div class="skillset-grid">
        <div class="icon-wrapper">
          <div class="icon">
            <Python/>
          </div>
          <div class="overlay">
            <p class="name">Python</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon">
            <img src="/svg/cs-logo.svg" alt="C# Logo">
          </div>
          <div class="overlay">
            <p class="name">C#</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon">
            <Unity/>
          </div>
          <div class="overlay">
            <p class="name">Unity Engine</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon">
            <img src="/svg/unreal-logo.svg" alt="Unreal Engine Logo">
          </div>
          <div class="overlay">
            <p class="name">Unreal Engine</p>
          </div>
        </div>
      </div>
      
    </section>
  </section>
</template>

<style scoped>
.about {
  padding: var(--section-y-padding) calc(var(--section-padding) + 10vw);
}

.headline{
  display: flex;
  justify-content: center;
  gap: 25px;
  align-items: center;
  flex-wrap: wrap;
}

.prof-img{
  width: auto;
  height: auto;
  max-width: 18%;
  min-width: 100px;
  border-radius: 100%;
}

.skillset-wrapper{
  margin: 3em 0;
}

.skillset-grid{
  display: grid;
  grid-template-columns: var(--grid-size);
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
}

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
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  margin: 0
}

.icon-wrapper:hover .overlay {
  opacity: 1;
}

.icon{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

}

.icon svg, .icon img{
  height: 4rem;
}

p{
  font-size: 1.1em;
}

ul{
  margin-left: 50px;
}

li{
  list-style-type: "- ";
  font-size: 1.1em;
  margin: .5em 0;
}
@media (min-width: 851px), (orientation: landscape){
  .skillset-grid{
    --grid-size: repeat(4, auto);
  }
}
@media (max-width: 850px){
  p, h1{
    text-align: center;
  }
  .skillset-grid{
    --grid-size: repeat(2, auto);
  }
}
</style>
