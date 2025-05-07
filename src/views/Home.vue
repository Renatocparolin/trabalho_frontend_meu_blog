<template>
  <div class="w-max-[180px] mx-auto">
    <h1 class="text-center text-3xl font-bold animate-pulse">Meu Blog</h1>
    <Slider :posts="posts" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { posts } from '../data/posts';
import Slider from '../components/Slider.vue';
//import { getPosts } from '../service/post-service';

//const posts = ref([]);

onMounted(async () => {
  posts.value = await getPosts();
})
</script>
