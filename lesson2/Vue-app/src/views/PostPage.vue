<template>
  <div class="posts-wrapper">
    <h2>PostVue</h2>
    <h3 v-if="isLoading && !visiblePosts.length">Loading...</h3>
    <h3 v-for="post in visiblePosts" :key="post.id">{{ post.title }}</h3>
    <h3 v-if="error">{{ error }}</h3>
    <button @click="postsStore.togglePosts">{{ isShowAll ? 'Показать первые 10 постов' : 'Показать все' }}</button>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from '@/stores/posts';
import { storeToRefs } from 'pinia';

const postsStore = usePostsStore();

const { error, isLoading, visiblePosts, isShowAll } = storeToRefs(postsStore);

postsStore.fetchPosts();
</script>

<style lang="scss" scoped>
.posts-wrapper {
  flex-grow: 1;
  padding: 20px;
}
</style>
