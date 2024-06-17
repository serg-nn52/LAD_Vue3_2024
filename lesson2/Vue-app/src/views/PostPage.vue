<template>
  <div class="posts-wrapper">
    <h2>PostVue</h2>
    <h3 v-if="isLoading">Loading...</h3>
    <h3 v-for="post in posts" :key="post.id">{{ post.title }}</h3>
    <h3 v-if="error">{{ error }}</h3>
  </div>
</template>

<script setup lang="ts">
import { useFetch } from '@/composables/useFetch';

import { onMounted } from 'vue';

interface IPost {
  body: string;
  id: number;
  title: string;
  userId: number;
}
const {
  data: posts,
  error,
  isLoading,
} = useFetch<IPost[]>(
  'posts',
  'get',
  {},
  {
    _page: '1',
    _limit: 25,
  },
);

onMounted(() => {
  useFetch('posts', 'post', { title: 'foo', body: 'bar', userId: 1 });
});
</script>

<style lang="scss" scoped>
.posts-wrapper {
  flex-grow: 1;
  padding: 20px;
}
</style>
