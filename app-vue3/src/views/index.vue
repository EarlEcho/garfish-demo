<script setup>
import { ref, getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance();
const currentRouter = ref('-')
const backToMain = () => {
  window?.Garfish?.router.replace({
    path: '/'
  })
};

const toChildRoute = () => {
  proxy.$router.push({ name: 'ChildMenu' });
}
</script>

<template>
  <p @click="backToMain">点击退出子应用，回到主应用</p>
  <hr />
  <p @click="toChildRoute">点击进入子应用的子路由 {{ currentRouter }}</p>
</template>

<style scoped>
.logo {
  height: 3em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
