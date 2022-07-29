<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from "./components/HelloWorld.vue";

// let appInstance = null;

// onMounted(async () => {
//   console.log("手动加载子应用2");
//   // 如果该子应用在其他地方注册过，不要和之前注册的同名，不然会导致配置覆盖。
//   // 例如在该页面有domGetter:container，但是之前注册的项目或者页面不一定有container容器
//   appInstance = Garfish.loadApp("appAntv", {
//     cache: true,
//     basename: "/sub",
//     domGetter: () => document.getElementById("appAntv"),
//     entry: "http://127.0.0.1:3002",
//   });
//   // 若已经渲染触发 show，只有首次渲染触发 mount，后面渲染都可以触发 show 提供性能
//   appInstance.mounted ? appInstance.show() : await appInstance.mount();
// });
// onUnmounted(() => {
//   appInstance.hide();
// });
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="子应用 Antv" />

  <!-- <div id="appAntv"></div> -->
</template>

<style scoped>
.logo {
  height: 6em;
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
