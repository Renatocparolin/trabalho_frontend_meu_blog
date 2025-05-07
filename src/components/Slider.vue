
<template>
    <swiper
      :modules="[Navigation, Pagination]"
      :slides-per-view="1"
      :space-between="24"
      navigation
      pagination
      class="mt-8"
    >
      <swiper-slide v-for="post in posts" :key="post.slug" class="px-10" >
        <div class="mb-6 p-4 shadow hover:shadow-lg transition mt-1">
          <router-link :to="`/post/${post.slug}`">
            <h2 class="text-xl font-semibold text-blue-600">
              {{ post.title }}
            </h2>
          </router-link>
          <p class="text-gray-700">{{ post.description }}</p>
         
        </div>
      </swiper-slide>
    </swiper>
  </template>
  
  <script setup>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import { Navigation, Pagination } from 'swiper/modules';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  
  const props = defineProps({
    posts: {
      type: Array,
      required: true,
    },
  });
  
  </script>
  