<template>
  <div class="content-wrapper">
    <slot></slot>
    <hr />
    <h2 class="test" :class="titleClasses">Description</h2>
    <slot name="bottom-slot"></slot>
    <button @click="incrementCount">Counter</button>
    <button @click="resetCount">Reset Counter</button>
    <div>Count: {{ count }}</div>
    <div :style="{ color: count < 5 ? 'orange' : 'yellow' }">{{ user.name }}</div>
    <div>{{ user.age }}</div>
    <div>Возраст в днях: {{ ageDays }}</div>
    <button @click="incrementAge">Age</button>
    <!-- <UserCard :car="'BMW'" :user="user" />
    <UserCard v-if="user.name === 'Sergey'" :user="user" /> -->
    <div v-if="device !== 'mobile'" class="user-cards">
      <UserCard @sell="(user) => emits('sell', user)" v-for="user in usersData" :user="user" :key="user.id" />
    </div>
    <!-- <CustomInput v-model="inputValue" /> -->
    <input v-model="inputValue" type="text" />
    <p>{{ inputValue }}</p>
    <p v-if="isError" class="error">Error!</p>
  </div>
</template>

<script setup lang="ts">
/* eslint-disable no-console */
import { computed, onMounted, onUpdated, ref, watch } from 'vue';
import UserCard from '../UserCard.vue';
import { usersData } from '@/data/users';
//import CustomInput from '../CustomInput.vue';
import type { IContentEmits } from './Content.types';
import { toPx } from '@/utils/style.utils';
import { useMedia } from '@/composables/useMedia';

const emits = defineEmits<IContentEmits>();

const count = ref<number>(0);
const user = ref({
  name: 'Sergey',
  age: 15,
});

const inputValue = ref('');
const isError = ref(false);

const { device } = useMedia();

watch(device, (val) => console.log(val), { immediate: true });

console.log('created');

onMounted(() => {
  console.log('mounted');
});

onUpdated(() => {
  console.log('updated');
});

const incrementCount = () => count.value++;
const resetCount = () => (count.value = 0);
const incrementAge = () => user.value.age++;

const ageDays = computed(() => user.value.age * 365);

const titleClasses = computed(() => ['h2', { description: count.value > 5 }]);

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

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const fs = ref(46);

const fsPx = computed(() => toPx(device.value === 'mobile' ? 20 : 46));

watch(inputValue, (newValue, oldValue) => {
  const isValid = (val: string) => /[a-zA-Z]/.test(val[val.length - 1]);
  if (isValid(newValue)) {
    inputValue.value = newValue;
    if (isValid(oldValue)) isError.value = false;
  } else {
    inputValue.value = oldValue;
    isError.value = true;
  }
});
</script>
<style lang="scss" scoped>
.content-wrapper {
  --font-size: v-bind(fsPx);
}
.card-button {
  display: none;
}
.card-wrapper {
  &:nth-child(2) {
    background-color: orange;
  }
  :deep(.card-button) {
    color: green;
  }
}
</style>
<style src="./Content.style.scss" lang="scss" scoped></style>
