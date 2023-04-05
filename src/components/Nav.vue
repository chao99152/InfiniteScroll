<template>
    <div class="w-full col-span-5">
        <div class="h-full w-[275px] ml-auto border-2 border-red">
            <div class="h-[50px] w-[50px] grid place-items-center 
                      hover:bg-gray-200 cursor-pointer rounded-full">
                <router-link to="/">
                    <div class="h-[28px] w-[28px]
                                bg-[url('./assets/icon/dogo.png')] bg-contain bg-center bg-no-repeat"></div>
                </router-link>
            </div>
            <div v-for="item in Navlist" class="group py-1 cursor-pointer">
                <router-link :to=item.name>
                    <div class="w-fit pr-4
                                flex justify-start items-center gap-2 
                                rounded-full group-hover:bg-gray-200 transition-all duration-100">
                        <div class="h-[52px] w-[52px] grid place-items-center cursor-pointer rounded-full">
                            <div :class="router.currentRoute.value.path.substring(1) == item.name ?
                            [`bg-[url('./assets/icon/${item.focus}')]`] : [`bg-[url('./assets/icon/${item.default}')]`]"
                                class="h-[28px] w-[28px] bg-contain bg-center bg-no-repeat">
                            </div>
                        </div>
                        <div class="text-xl">{{ item.name }}</div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import router from '../router';

const Navlist = ref([
    {
        name: 'home',
        default: 'homeoutline.svg',
        focus: 'home.svg'
    },
    {
        name: 'explore',
        default: 'searchcircleoutline.svg',
        focus: 'searchcircle.svg'
    },
    {
        name: 'notification',
        default: 'notificationscircleoutline.svg',
        focus: 'notificationscircle.svg'
    },
])
</script>