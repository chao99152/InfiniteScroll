<template>
    <div>
        <div class="fixed top-0 w-[inherit] bg-[rgba(255,255,255,0.6)] backdrop-blur-md">
            <div class="w-full h-[53px] pl-2 grid items-center text-xl font-bold">Home</div>
        </div>
        <ScrollBox />

        <div class="sticky top-0 w-[375px] h-full border-l-2 border-gray-100"></div>
    </div>
</template>

<script setup lang="ts">
import ScrollBox from './ScrollBox.vue';
</script>