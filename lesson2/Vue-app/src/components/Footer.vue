<template>
  <footer class="footer">{{ title }}</footer>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ title: string; bg?: string }>(), { bg: 'yellow' });

//const bg = computed(() => props.bg || 'yellow');
</script>

<style lang="scss" scoped>
.footer {
  --bg: v-bind(props.bg);
}
</style>
<style lang="scss" scoped>
.footer {
  height: 150px;
  background-color: var(--bg);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
