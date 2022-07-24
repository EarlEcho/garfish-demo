<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import HelloWorld from "./components/HelloWorld.vue";
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
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
  </div>
  <HelloWorld msg="子应用（App-Vue3）" />

  <p @click="backToMain">点击退出子应用，回到主应用</p>
  <hr />
  <p @click="toChildRoute">点击进入子应用的子路由 {{ currentRouter }}</p>

  <router-view />
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
