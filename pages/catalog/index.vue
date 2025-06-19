<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;

try {
  const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories");
  console.log(data);
} catch (e) {
  console.error(e);
}
</script>

<template>
  <div>Catalog</div>
</template>
