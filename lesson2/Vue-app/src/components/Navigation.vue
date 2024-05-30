<template>
  <nav class="navigation">
    <RouterLink active-class="link-active" class="link" :to="{ name: 'home' }">Main</RouterLink>
    <RouterLink class="link" :to="{ name: 'posts' }">Posts</RouterLink>
    <RouterLink class="link" :to="{ name: 'users' }">Users</RouterLink>
  </nav>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.navigation {
  background-color: aquamarine;
  padding: 10px 20px;
  display: flex;
  gap: 20px;
  .link {
    text-decoration: none;
    color: black;
    &-active {
      color: red;
    }
  }
  .router-link-active {
    color: green;
  }
}
</style>
