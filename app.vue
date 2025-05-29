<script setup lang="ts">
const hello = ref("hello");
</script>

<template>
  <div>
    {{ hello }}
    <SharedTestComp />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
