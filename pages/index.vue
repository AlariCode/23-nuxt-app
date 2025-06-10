<script setup lang="ts">
function openAbout() {
  navigateTo({ path: "/about" });
}
console.log("index");
</script>

<template>
  <div>
    Index
    <NuxtLink to="/about">About</NuxtLink>
    <button @click="openAbout">Перейти</button>
    <InputField variant="black" placeholder="Введите ваш email для подписки" />
  </div>
</template>
