<script setup lang="ts">
import type { NuxtError } from "#app";

const { error } = defineProps<{
  error: NuxtError;
}>();
</script>

<template>
  <div>
    <h1>{{ error.statusCode }}</h1>
    <div>{{ error.statusMessage }}</div>
    <ActionButton>На главную</ActionButton>
  </div>
</template>
