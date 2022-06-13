<script>
export default {
  data() {
    return {
      firstName: 'Francis',
      firstName2: 'Ivan',
      lastName: 'Clemente'
      }
  },
  mounted() {
    // window.addEventListener("scroll", this.onScroll)
  },
  beforeDestroy() {
    // window.removeEventListener("scroll", this.onScroll)
  },
  methods: {
    onScroll(e) {
      // console.log(window.scrollY);
    }
  }
}
</script>

<template>
  <div class="hero-intro">
    <h3>Hi, I'm</h3>
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
      I'm specialized in building mobile and PC Game apps.
    </h2>
  </div>
</template>

<style scoped>

  .hero-intro{
    display: flex;
    flex-direction: column;
    padding-left: var(--hero-padding-left);
    padding-right: var(--hero-padding-right);
    /* margin: var(--hero-margin); */
    min-height: calc(100vh - 15rem);
    justify-content: center;
  }

  h1, h3{
    margin: 0;
  }

  .full-name{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .full-name{
    line-height: clamp(2.5vh, var(--first-size), 6vh);
  }

  .full-name{
    margin: 0;
  }

  .first, .last{
    display: flex;
  }

  .first li{
    font-size: clamp(82%, var(--first-size), 200%);
    color: var(--yellow-secondary);
  }
  .last li{
    color: var(--blue-primary);
    font-size: clamp(105%, var(--last-size), 255%);
  }

  .first li, .last li{
    transition: all .2s;
  }

  .sub-text{
    font-size: 1vw;
    font-weight: normal;
  }

  .sub-text span{
    font-weight: bold;
  }

  @media (hover: hover){
    .first li:hover, .last li:hover{
      transform: translateY(-25%);
    }
  }

  @media (min-width: 851px), (orientation: landscape){
    .hero-intro{
      --hero-padding-left: 20vw;
      --hero-padding-right: 40vw;
      --hero-margin: 15vh 0;
      --first-size: 4vw;
      --last-size: 5.1vw;
    }
  }
  @media (orientation: portrait), (max-width: 850px){
    .hero-intro{
      --hero-padding-left: 0;
      --hero-padding-right: 0;
      --hero-margin: 10vh 0;
      --first-size: 4vw;
      --last-size: 5.1vw;
    }
  }

</style>