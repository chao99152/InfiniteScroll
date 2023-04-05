<template>
    <div class="mt-[53px]">
        <div v-for="(data, index) in dataList" class="flex gap-4 p-4 hover:bg-gray-100 cursor-pointer">
            <div>
                <div class="h-[48px] w-[48px] rounded-full 
                bg-center bg-cover bg-no-repeat" :style="{ backgroundImage: `url(${data.url})` }">
                </div>
            </div>
            <div class="flex flex-col w-full">
                <div class="font-bold">{{ data.name }}
                    <span class="text-sm text-gray-500 font-medium ml-1">@{{ data.account }}</span>
                </div>
                <div>{{ data.post }}</div>
            </div>
        </div>
        <div id="obeserver" class="h-[100px]"></div>
    </div>
</template>

<script setup lang="ts">
import axiosAPI from '../../composable/api'

import { ref, reactive, onMounted } from 'vue'

interface DataList {
    url: String,
    name: String,
    account: String,
    post: String
}

const post = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
const dataList: DataList[] = reactive([])
const isLoading = ref(false)
onMounted(() => {
    const observeBox = document.querySelector('#obeserver')
    const obeserver = new IntersectionObserver(async (entries) => {
        if (isLoading.value) return
        if (!entries[0].isIntersecting) return

        isLoading.value = true
        try {
            let res = (await axiosAPI({ methods: 'GET', url: '/users' })).data
            if (!res.data) return
            res.data.forEach((data) => {
                dataList.push({
                    url: data.avatar,
                    name: `${data.first_name} ${data.last_name}`,
                    account: data.email.replace('@reqres.in', ''),
                    post: post
                })
            });
            isLoading.value = false
        } catch (err) {
            console.log(err)
            // obeserver.unobserve(entries[0])
        }
    }, { threshold: 0.8 })

    obeserver.observe(<Element>observeBox)
})
</script>