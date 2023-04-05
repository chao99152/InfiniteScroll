<template>
    <div class="relative flex w-full col-span-11 overflow-y-scroll">
        <div class="relative w-[600px] h-full">
            <div class="fixed top-0 w-[inherit] bg-white">
                <div class="w-full h-[53px] pl-2 grid items-center text-xl font-bold">Home</div>
                <!-- <div class="w-full grid grid-cols-2 h-[60px]">
                    <div class="grid place-content-center hover:bg-gray-300 cursor-pointer">
                        <div class="h-full grid place-content-center">For you</div>
                    </div>
                    <div class="group flex place-content-center hover:bg-gray-300 cursor-pointer">
                        <div class="h-full flex place-items-center">Following</div>
                    </div>
                </div> -->
            </div>
            <!-- <div class="h-[108px] border-2 border-black">a</div> -->
            <ScrollBox />
        </div>

        <div class="sticky top-0 w-[375px] h-full border-2 border-blue-700">
            side
        </div>
    </div>
</template>

<script setup lang="ts">
import ScrollBox from './ScrollBox.vue';
</script>