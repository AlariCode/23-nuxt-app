<script setup lang="ts">
function openAbout() {
  navigateTo({ path: "/about" });
}
</script>

<template>
  <div>
    Index
    <NuxtLink to="/about">About</NuxtLink>
    <button @click="openAbout">Перейти</button>
  </div>
</template>
