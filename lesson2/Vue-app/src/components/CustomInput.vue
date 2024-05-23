<template>
  <input
    :value="modelValue"
    @input="(event) => emits('update:modelValue', (event.target as HTMLInputElement).value)"
    type="text"
  />
  <p>{{ modelValue }}</p>
</template>

<script setup lang="ts">
defineProps<{ modelValue: string }>();
const emits = defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<style scoped></style>
