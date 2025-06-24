<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const input = ref("");
const select = ref("");

await useAsyncData<GetCategoriesResponse>(
  "categories",
  () => $fetch(API_URL + "/categories"),
  {
    watch: [input],
  }
);
</script>

<template>
  <div>
    Catalog
    <SelectField
      v-model="select"
      :options="[
        {
          value: '',
          label: 'Категории',
        },
        {
          value: '1',
          label: 'Первый',
        },
        {
          value: '2',
          label: 'Второй',
        },
      ]"
    />
  </div>
</template>
