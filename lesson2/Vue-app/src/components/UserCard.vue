<template>
  <div class="card-wrapper">
    <div>Имя: {{ user.name }}</div>
    <div>Возраст: {{ user.age }}</div>
    <div>{{ ageDays }}</div>
    <div v-if="car">Car: {{ car }}</div>
    <div v-if="user.age < 18">Ребенок</div>
    <div v-else-if="user.age < 60">Молодой</div>
    <div v-else>Пожилой</div>
    <button @click="emits('sell', user)">Купить</button>
  </div>
</template>

<script setup lang="ts">
import type { IUser } from '@/types/users.types';
import { computed } from 'vue';

interface IUserCardProps {
  user: IUser;
  car?: string;
}
interface IUserCardEmits {
  (e: 'sell', user: IUser): void;
}

const props = withDefaults(defineProps<IUserCardProps>(), { car: 'AUDI' });
const emits = defineEmits<IUserCardEmits>();

const ageDays = computed(() => `Возраст в днях: ${props.user.age * 365}`);
</script>

<style lang="scss" scoped>
.card-wrapper {
  border: 2px solid black;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px;
  width: max-content;
  background-color: white;
}
</style>
