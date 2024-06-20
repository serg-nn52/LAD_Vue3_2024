<template>
  <div class="main-wrapper">
    MainVue

    <div>Count: {{ count }}</div>
    <div v-if="count < 10">Double count: {{ doubleCount }}</div>
    <button @click="increment">Increment</button>
    <button @click="resetCounter">Reset</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
import { storeToRefs } from 'pinia';

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore);
const { increment, resetCounter } = counterStore;
</script>

<style lang="scss" scoped>
.main-wrapper {
  flex-grow: 1;
  padding: 20px;
}
</style>
