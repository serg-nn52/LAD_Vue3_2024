<template>
  <div class="content-wrapper">
    <slot></slot>
    <hr />
    <h2>Description</h2>
    <slot name="bottom-slot"></slot>
    <button @click="incrementCount">Counter</button>
    <button @click="resetCount">Reset Counter</button>
    <div>Count: {{ count }}</div>
    <div>{{ user.name }}</div>
    <div>{{ user.age }}</div>
    <div>Возраст в днях: {{ ageDays }}</div>
    <button @click="incrementAge">Age</button>
    <!-- <UserCard :car="'BMW'" :user="user" />
    <UserCard v-if="user.name === 'Sergey'" :user="user" /> -->
    <div class="user-cards">
      <UserCard @sell="(user) => emits('sell', user)" v-for="user in usersData" :user="user" :key="user.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import UserCard from './UserCard.vue';
import { usersData } from '@/data/users';
import type { IUser } from '@/types/users.types';

interface IContentEmits {
  (e: 'sell', user: IUser): void;
}

const emits = defineEmits<IContentEmits>();

const count = ref<number>(0);
const user = ref({
  name: 'Sergey',
  age: 15,
});

// const user = reactive({
//   name: 'Sergey',
//   age: 30,
// });

const incrementCount = () => count.value++;
const resetCount = () => (count.value = 0);
const incrementAge = () => user.value.age++;

const ageDays = computed(() => user.value.age * 365);

// watch(
//   count,
//   (newVal, oldValue) => {
//     console.log('new', newVal);
//     console.log('old', oldValue);
//   },
//   { immediate: true },
// );

watch(
  user,
  (newVal, oldValue) => {
    console.log('new', newVal);
    console.log('old', oldValue);
  },
  { deep: true },
);

watch(
  () => user.value.age,
  (newVal, oldValue) => {
    console.log('new', newVal);
    console.log('old', oldValue);
  },
);
</script>

<style lang="scss" scoped>
.content-wrapper {
  // background-color: aqua;
  padding: 20px;
  flex-grow: 1;
  background: url(https://gas-kvas.com/uploads/posts/2023-03/1678092179_gas-kvas-com-p-fon-krasivii-odnotonnii-s-risunkom-25.jpg);
}
.user-cards {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}
</style>
