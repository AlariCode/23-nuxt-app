<script setup lang="ts">
import TestComp from "./widgets/TestComp.vue";

const hello = ref("hello");
</script>

<template>
  <div>
    {{ hello }}
    <TestComp />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
