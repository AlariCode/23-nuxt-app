<script setup lang="ts">
import { SharedTestComp } from "#components";

const config = useAppConfig();
const hello = ref(config.theme.mainColor);
</script>

<template>
  <div>
    {{ hello }}
    <SharedTestComp />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
