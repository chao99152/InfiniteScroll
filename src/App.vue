<template>
  <div class="w-screen h-screen grid grid-cols-16cols">
    <NavVue />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import NavVue from './components/Nav.vue';
</script>