<template>
  <div v-if="post">
    <h1 class="text-center text-3xl font-bold animate-bounce subpixel-antialiased">{{ post.title }}</h1>
    <br>
    <p class="text-center">{{ post.content }}</p>
  </div>
  <div v-else>
    <p>Post não encontrado.</p>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { posts } from '../data/posts';


const route = useRoute();
const post = posts.find((p) => p.slug === route.params.slug);

</script>
