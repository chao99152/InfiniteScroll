<template>
  <div class="w-screen h-screen grid grid-cols-16cols">
    <NavVue />

    <div class="relative flex w-full col-span-11 overflow-y-scroll">
      <div class="relative w-[600px] h-full">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NavVue from './components/Nav.vue';
</script>