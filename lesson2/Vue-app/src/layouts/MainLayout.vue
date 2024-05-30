<template>
  <Header title="MainLayout Header" />
  <Navigation />
  <Breadcrumbs />
  <RouterView />
  <Footer title="MainLayout Footer" />
</template>

<script setup lang="ts">
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import Navigation from '@/components/Navigation.vue';
</script>

<style scoped></style>
