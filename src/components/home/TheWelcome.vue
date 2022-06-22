<script>
export default {
  data() {
    return {
      firstName: 'Francis',
      firstName2: 'Ivan',
      lastName: 'Clemente'
      }
  }
}
</script>

<template>
<kinesis-container>
  <section class="hero-intro">
    <div class="introduction">
      <h3 class="sub-text">Hi, I'm</h3>
      <h1 class="full-name">
        <ul class="first">
          <li v-for="ch in firstName" class="name-letter">{{ch}}</li>
          <li>&nbsp;</li>
          <li v-for="ch in firstName2" class="name-letter">{{ch}}</li>
        </ul>
        <ul class="last">
          <li v-for="ch in lastName">{{ch}}</li>
        </ul>
      </h1>
      <h2 class="sub-text">
        I am a 
        <span>Game</span> and <span>Software Developer</span> based in the Philippines.
        I can build games and applications, specializing on PC and Mobile platforms.
      </h2>
      <div class="contacts">
        <RouterLink to="/works" class="primary-button contact-button">
          View Works
        </RouterLink>
        <RouterLink to="/about" class="contact-button">
          Get in touch
        </RouterLink>
      </div>
    </div>
    <!-- /INTRODUCTION -->
    <div class="splash">
      <div class="splash-outer-container">
      <kinesis-element :strength="-25" class="splash-container">
        <kinesis-element :strength="-30">
          <div class="splash-logo"></div>
        </kinesis-element>
      </kinesis-element>
      </div>
    </div>
  </section>
</kinesis-container>
</template>

<style scoped>
  .hero-intro{
    display: flex;
    padding: 0 var(--section-padding);
    padding-bottom: var(--hero-padding-bottom);
    min-height: calc(100vh - var(--hero-padding-bottom));
    justify-content: space-between;
  }

  .introduction{
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 50%;
  }

  h1{
    margin: 0;
  }

  h3{
    margin-bottom: 5px;
  }

  .splash{
    display: flex;
    align-items: center;
  }

  .splash-outer-container{
    position: relative;
    width: 100%;
  }

  .splash-container{
    background: url("/splash-border.png");
    background-repeat: no-repeat;
    background-size: 100%;
    width: 10em;
    height: auto;
    padding: 5em;
  }

  .splash-logo{
    background: url("/logo_only_gradient.png");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    width: 100%;
    height: 10em;
  }

  .full-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: clamp(1.1em, var(--first-size), 2em);
    margin: 0;
  }

  .first, .last{
    display: flex;
  }

  .first li{
    font-size: clamp(120%, var(--first-size), 200%);
    color: var(--yellow-secondary);
  }
  .last li{
    color: var(--blue-primary);
    font-size: clamp(155%, var(--last-size), 255%);
  }

  .first li, .last li{
    transition: all .2s;
  }

  .sub-text{
    font-size: clamp(.8em, 1vw, 1.25em);
    font-weight: normal;
  }

  .sub-text span{
    font-weight: bold;
  }

  .contacts{
    margin-top: 25px;
  }

  .contacts a{
    display: inline-flex;
  }

  @media (hover: hover){
    .first li:hover, .last li:hover{
      transform: translateY(-25%);
    }  
  }

  @media (min-width: 851px), (orientation: landscape){
    .hero-intro{
      --hero-margin: 15vh 0;
      --hero-padding-bottom: 15rem;
    }

    .introduction{
      --first-size: 4vw;
      --last-size: 5.1vw;
    }

    .sub-text{
      width: 50%;
    }
  }
  @media (orientation: portrait), (max-width: 850px){
    .hero-intro{
      --hero-margin: 10vh 0;
      --hero-padding-bottom: 15rem;
      justify-content: center;
      text-align: center;
    }

    .introduction{
      --first-size: 4vw;
      --last-size: 5.1vw;
      align-items: center;
      justify-content: center;
      text-align: center;
      max-width: 80%;
    }
    .sub-text{
      width: 100%;
    }

    .splash{
      display: none;
    }
  }

</style>