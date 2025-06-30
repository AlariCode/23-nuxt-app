<script lang="ts" setup>
definePageMeta({
  middleware: "auth",
});
const authStore = useAuthStore();
</script>

<template>
  <div>
    <NuxtLink href="/" @click="authStore.clearToken">Выход</NuxtLink>
  </div>
</template>
