<template>
  <button @click="$emit('clickMe', count)">{{ buttonName + ' ' + count }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    buttonName: {
      type: String,
      require: true,
      default: 'Counter',
    },
    count: {
      type: Number,
      require: true,
      default: 0,
    },
  },
  emits: ['clickMe'],
});
</script>

<style scoped></style>
