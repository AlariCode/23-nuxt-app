<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const input = ref("");

async function sendData() {
  const data = await $fetch<GetCategoriesResponse>(API_URL + "/categories", {
    method: "POST",
    body: input,
  });
  console.log(data);
}
</script>

<template>
  <div>
    Catalog
    <InputField v-model="input" variant="black" />
    <button @click="sendData">Отправить</button>
  </div>
</template>
