<template>
  <div class="users-wrapper">
    <button @click="router.back()" class="back">Back</button>
    User
    <div class="users-cards">
      <UserCard v-if="user" :user="user" />
      <div v-else>Пользователь не найден!</div>
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import UserCard from '@/components/UserCard.vue';
import { usersData } from '@/data/users';
import { watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
const route = useRoute();
const router = useRouter();

const user = usersData.find((user) => user.id === +route.params.userId);

watch(
  () => user?.id,
  (value) => {
    if (!value) router.push({ name: 'not-found' });
  },
  { immediate: true },
);
</script>

<style lang="scss" scoped>
.users-wrapper {
  flex-grow: 1;
  padding: 20px;
}
.users-cards {
  display: flex;
  gap: 20px;
}
</style>
