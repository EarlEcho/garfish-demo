<script setup>
const toChildRoute = () => {
  proxy.$router.push({ name: 'ChildMenu' });
}
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
