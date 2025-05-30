<script setup lang="ts">
import { SharedTestComp } from "#components";

const config = useAppConfig();
const runtime = useRuntimeConfig();
const hello = ref(runtime.public.apiurl);
</script>

<template>
  <div>
    {{ hello }}
    <SharedTestComp />
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
