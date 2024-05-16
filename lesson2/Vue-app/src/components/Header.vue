<template>
  <header v-bind:style="styles" class="header">Header {{ count }}</header>
  <!-- <HeaderButton
    @click-me="(value) => listenerButton(value)"
    :count="count"
    :button-name="'NewCounter'"
    @click="incrementCount"
  /> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import Button from './Button.vue';

export default defineComponent({
  // components: {
  //   HeaderButton: Button,
  // },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCount() {
      this.count++;
    },
    listenerButton(value: number) {
      console.log(value);
    },
  },
  computed: {
    isEven() {
      console.log('computed');
      return !(this.count % 2);
    },
    styles() {
      return { backgroundColor: this.isEven ? 'grey' : 'green' };
    },
  },
  watch: {
    count(newValue, oldValue) {
      console.log('newValue', newValue);
      console.log('oldValue', oldValue);
    },
  },
});
</script>

<style lang="scss" scoped>
.header {
  height: 150px;
  background-color: grey;
  color: black;
  font-size: 24px;
  font-weight: 900;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
