<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BackgroundVue from './components/Background.vue';
import HeaderVue from './components/Header.vue';
import './assets/base.css';
</script>

<script>
export default {
  data() {
    return {
      mainMenuList: [
        'about',
        'works',
        'contact'
      ]
      }
    }
  }
</script>

<template>
  <BackgroundVue/>
  <HeaderVue/>
  <RouterView/>
</template>

<style>

#app {
  font-weight: normal;
}

</style>
