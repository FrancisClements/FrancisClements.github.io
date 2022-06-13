<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
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
  <HeaderVue/>

</template>

<style>

#app {
  font-weight: normal;
}

</style>
