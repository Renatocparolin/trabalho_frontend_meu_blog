<template>
  <div class="w-max-[180px] mx-auto">
    <h1 class="text-center text-3xl font-bold animate-pulse">Meu Blog</h1>
    <Slider :posts="store.posts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
//import { posts } from '../data/posts';
import Slider from '../components/Slider.vue';
import { getPosts } from '../service/post-service';
import { store } from '../store'


onMounted(async () => {
  store.posts = await getPosts()
})

const posts = store.posts;




</script>
