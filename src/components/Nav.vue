<template>
    <div class="w-full col-span-5">
        <div class="h-full w-[275px] ml-auto border-r-2 border-gray-100">
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
                            <div :style="router.currentRoute.value.path.substring(1) == item.name ?
                            { backgroundImage: `url('src/assets/icon/${item.focus}')` } : { backgroundImage: `url('src/assets/icon/${item.static}')` }"
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
<!-- router.currentRoute.value.path.substring(1) == item.name ?
                            [`bg-[url('./assets/icon/${item.focus}')]`] : [`bg-[url('./assets/icon/${item.static}')]`] -->
<script setup lang="ts">
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router';
const router = useRouter()
console.log(router.currentRoute.value)
const Navlist = reactive([
    {
        name: 'home',
        focus: 'home.png',
        static: 'homestatic.png',
    },
    {
        name: 'explore',
        static: 'searchstatic.png',
        focus: 'search.png'
    },
    {
        name: 'notification',
        static: 'notificationscircleoutline.svg',
        focus: 'notificationscircle.svg'
    },
])
</script>