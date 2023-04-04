<template>
    <div>
        <div v-for="item in 10" class="min-h-[200px] border-2 border-black">
        </div>
    </div>
</template>

<script setup lang="ts">
import axiosAPI from '../../composable/api'

let a = axiosAPI({ methods: 'GET', url: '/users' })
console.log(a)

</script>