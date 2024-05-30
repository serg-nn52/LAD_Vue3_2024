<template>
  <div class="bc-wrapper">
    <RouterLink v-for="(item, index) in route.meta.breadcrumbs" :key="index" :to="{ name: item.routeName }"
      >{{ item.name }}
      <div v-if="isShowDivider(index)">/</div>
    </RouterLink>
    <div v-if="params">{{ params }}</div>
  </div>

  <div></div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const params = ref();

watch(
  () => route.params,
  (value) => {
    params.value = Object.values(value)[0];
  },
  { immediate: true },
);

const isShowDivider = computed(() => {
  return (index: number) => {
    return index !== route.meta.breadcrumbs.length - 1 || params.value;
  };
});
</script>

<style lang="scss" scoped>
.bc-wrapper {
  display: flex;
  padding: 5px 20px;
  a {
    text-decoration: none;
    display: flex;
  }
}
</style>
