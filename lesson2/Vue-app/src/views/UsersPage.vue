<template>
  <div class="users-wrapper">
    Users
    <div class="users-cards">
      <div @click="handlerUser(user)" v-for="user in usersData" :key="user.id">{{ user.name }}</div>
      <!-- <UserCard @sell="(user: IUser) => handlerUser(user)" v-for="user in usersData" :key="user.id" :user="user" /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { usersData } from '@/data/users';
import type { IUser } from '@/types/users.types';
import { useRouter } from 'vue-router';

const router = useRouter();

const handlerUser = (user: IUser) => {
  router.push({ name: 'user', params: { userId: user.id } });
};
</script>

<style lang="scss" scoped>
.users-wrapper {
  flex-grow: 1;
  padding: 20px;
}
.users-cards {
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
}
</style>
