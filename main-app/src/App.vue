<script setup>
import { getCurrentInstance, computed } from "vue";

import SubApp from "./components/SubApp.vue";
import Layout from "./components/Layout.vue";

const { proxy } = getCurrentInstance();

const path = computed(() => proxy.$route.path);
</script>
<template>
  <Layout>
    <SubApp v-if="/sub/u.test(path)" />
    <router-view v-else></router-view>
  </Layout>
</template>

<style>
@import url(./assets/index.less);
</style>
