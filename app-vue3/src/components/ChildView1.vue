<script setup>
import { ref} from 'vue';
// const { proxy } = getCurrentInstance();

// console.log(' proxy', proxy);
const hell2 = ref('11');
</script>
<template>
    <p>
        我是子路由： {{hell2}}
    </p>
</template>