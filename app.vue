<script setup lang="ts">
import { SharedTestComp } from "#components";

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
