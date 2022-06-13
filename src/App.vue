<template>
    <navbar-page></navbar-page>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
import NavbarPage from "./components/NavbarPage.vue";
export default {
  components: {
    NavbarPage,
  },
};
</script>
