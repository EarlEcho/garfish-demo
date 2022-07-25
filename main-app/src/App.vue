<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
// import SubApp from "./components/SubApp.vue";

import Layout from "./components/Layout.vue";

const toSubApp = () => {
  window.Garfish.router.push({ path: "/appVue3" });
};
</script>
<template>
  <Layout>
    <router-view></router-view>
  </Layout>
</template>

<style></style>
