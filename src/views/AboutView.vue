<script setup>
import { Java, Python, Unity, GitAlt } from '@vicons/fa';
import SkillIconVue from '../components/SkillIcon.vue';
</script>

<template>
  <section class="about">
    <div class="headline">
      <img src="/img/profile.jpg" alt="Profile Image" class="prof-img">
      <div class="headline-text">
        <h1 class="header">Francis Ivan Clemente</h1>
        <p>is a game and software developer from the Philippines.</p>
      </div>
    </div>
    <p>&nbsp;</p>
    <p>I have graduated at Holy Angel University as Bachelor of Science on Entertainment Multimedia Computing (EMC).</p>
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
        <SkillIconVue name="Python">
          <Python/>
        </SkillIconVue>
        <SkillIconVue name="C#">
          <img src="/svg/cs-logo.svg" alt="C# Logo">
        </SkillIconVue>
        <SkillIconVue name="Git">
          <GitAlt/>
        </SkillIconVue>
        <SkillIconVue name="Visual Studio Code">
          <img src="/svg/vscode-logo.svg" alt="VS Code Logo">
        </SkillIconVue>
        <SkillIconVue name="Unity Engine">
          <Unity/>
        </SkillIconVue>
        <SkillIconVue name="Unreal Engine">
          <img src="/svg/unreal-logo.svg" alt="Unreal Engine Logo">
        </SkillIconVue>
        <SkillIconVue name="Blender">
          <img src="/svg/blender-logo.svg" alt="Blender Logo">
        </SkillIconVue>
        <SkillIconVue name="Autodesk Maya">
          <img src="/svg/autodesk-maya-logo.svg" alt="Maya Logo">
        </SkillIconVue>
        <SkillIconVue name="Adobe Creative Suite">
          <img src="/svg/adobe-logo.svg" alt="Adobe Logo">
        </SkillIconVue>
        <SkillIconVue name="Clip Studio Paint">
          <img src="/svg/clip-studio-paint-logo.svg" alt="Clip Studio Paint Logo">
        </SkillIconVue>
      </div>
    </section>
    <section class="contacts center">
      <p>Interested to work with me?&nbsp;Feel free to contact me below!</p>
      <h1 class="email">francisivan.clemente@gmail.com</h1>
      <a href="https://drive.google.com/file/d/116hHPZPZadPvgg_xqc-K5UDI15dMeYSy/view" class="primary-button"  target="_blank" rel="noopener noreferrer">View Resume</a>

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

.contacts{
  margin: 2em 0;
}

.email{
  color: var(--yellow-secondary);
}

.primary-button{
  padding: .5em;
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
    --grid-size: repeat(8, auto);
  }
}
@media (max-width: 850px){
  p, h1{
    text-align: center;
  }
  .skillset-grid{
    --grid-size: repeat(4, auto);
  }
}
</style>
