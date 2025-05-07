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
import { computed } from 'vue' // Adicione esta linha
import { useRoute } from 'vue-router';
//import { posts } from '../data/posts';
import { store } from '../store'


const route = useRoute();
const post = computed(() => 
  store.posts.find((p) => p.slug === route.params.slug)
)
console.log(post.value);

</script>
