<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const input = ref("");

const { data, error, refresh } = await useAsyncData<GetCategoriesResponse>(
  "categories",
  () => $fetch(API_URL + "/categories"),
  {
    watch: [input],
  }
);

// $fetch - не SSR friendly, используем не на верхнем
// useFetch - используем только на верхнем, SSR friendly
// useAsyncData - SSR friendly, нужен если сложные вариант получения данных

// API_URL + "/categories",

console.log(data.value);
console.log(error.value);

async function sendData() {
  refresh();
}
</script>

<template>
  <div>
    Catalog
    <InputField v-model="input" variant="black" />
    <button @click="sendData">Отправить</button>
  </div>
</template>
