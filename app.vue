<script setup lang="ts">
throw createError({
  statusCode: 401,
  statusMessage: "Недоступна страница без авторизации",
  data: {
    userId: 1,
  },
});
</script>

<template>
  <div>
    Привет!
    <NuxtPage />
  </div>
</template>
