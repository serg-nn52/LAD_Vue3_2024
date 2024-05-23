<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Content from './components/Content/Content.vue';
</script>

<template>
  <div class="wrapper">
    <Header />
    <Content @sell="(id) => console.log(id)">
      <template #default>
        <h1>Our app</h1>
      </template>

      <template #bottom-slot>
        <p class="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum mollitia quos error. Iste voluptas quisquam
          fuga? Amet nulla enim eum! Omnis quidem iusto id, nemo nihil labore sunt qui doloremque.
        </p>
      </template>
    </Content>
    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  min-height: 100vh;
  justify-content: space-between;
  flex-direction: column;
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
