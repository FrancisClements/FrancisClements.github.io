<script setup>
import { Java, Python, Unity, GitAlt } from '@vicons/fa';
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
      <h1 class="center">Proficient Skillset and Tools</h1>
      <div class="skillset-grid">
        <div class="icon-wrapper">
          <div class="icon-skill">
            <Python/>
          </div>
          <div class="overlay">
            <p class="name">Python</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <img src="/svg/cs-logo.svg" alt="C# Logo">
          </div>
          <div class="overlay">
            <p class="name">C#</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <GitAlt/>
          </div>
          <div class="overlay">
            <p class="name">Git</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <img src="/svg/vscode-logo.svg" alt="VS Code Logo">
          </div>
          <div class="overlay">
            <p class="name">Visual Studio Code</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <Unity/>
          </div>
          <div class="overlay">
            <p class="name">Unity Engine</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <img src="/svg/unreal-logo.svg" alt="Unreal Engine Logo">
          </div>
          <div class="overlay">
            <p class="name">Unreal Engine</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <img src="/svg/blender-logo.svg" alt="Blender Logo">
          </div>
          <div class="overlay">
            <p class="name">Blender</p>
          </div>
        </div>
        <div class="icon-wrapper">
          <div class="icon-skill">
            <img src="/svg/autodesk-maya-logo.svg" alt="Maya Logo">
          </div>
          <div class="overlay">
            <p class="name">Autodesk Maya</p>
          </div>
        </div>
      </div>
    </section>
    <section class="contacts center">
      <p>Interested to work with me?&nbsp;Feel free to contact me below!</p>
      <h1 class="email">ftclemente@student.hau.edu.ph</h1>

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

.contacts{
  margin: 2em 0;
}

.email{
  color: var(--yellow-secondary);
}

.icon-skill svg, .icon-skill img{
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
