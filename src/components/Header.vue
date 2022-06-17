<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<script>
export default {
  data() {
    return {
      mainMenuList: [
        'works',
        'about'
      ]
      }
    }
  }
</script>

<template>
  <header>
    <div class="header-nav">
      <div class="header-logo">
        <RouterLink to="/">
          <img src="/logo_colored.png" alt="Francis Ivan Clemente">
        </RouterLink>
      </div>
      <nav>
        <ul class="header-main_menu">
          <li>
            <RouterLink to="/">Home</RouterLink>
          </li>

          <li v-for="choice in mainMenuList">
            <RouterLink :to="choice">{{choice}}</RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
    header {
        line-height: 1.5;
        max-height: 100vh;  
        width: 100%;
        display: flex;
        background-color: var(--bg);
    }

    .header-nav{
        align-items: center;
        display: flex;
        height: 75px;
        justify-content: space-between;
        width: 100%;
        margin: 0 5vw;
        padding-top: 5px;
    }

    .header-logo{
        width: 150px;
    }

    .header-main_menu{
        display: flex;
        gap: 10px;
        justify-content: center;
        align-items: center;
    }

    .header-main_menu li{
        text-transform: capitalize;
        font-size: 1rem;
    }

    @media (min-width: 851px), (orientation: landscape){
        .header-nav{
            margin: 0 var(--section-padding);
        }
    }
</style>