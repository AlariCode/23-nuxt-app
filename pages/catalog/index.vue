<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { GetProductsResponse } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const category_id = ref("");

const query = computed(() => ({
  limit: 20,
  offset: 0,
  category_id: category_id.value || undefined,
}));

const { data } = await useFetch<GetCategoriesResponse>(API_URL + "/categories");

const selectDefault = { value: "", label: "Категории" };
const categoriesSelect = computed(() => {
  return data.value
    ? data.value?.categories
        .map((c) => ({
          value: c.id.toString(),
          label: c.name,
        }))
        .concat(selectDefault)
    : [selectDefault];
});

const { data: productsData } = await useFetch<GetProductsResponse>(
  API_URL + "/products",
  {
    query,
  }
);
</script>

<template>
  <div>
    <h1 class="left">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="category_id" :options="categoriesSelect" />
      </div>
      <div class="catalog__grid">
        <CatalogCard
          v-for="product in productsData?.products"
          :key="product.id"
          v-bind="product"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.catalog {
  display: flex;
  gap: 36px;
}
.catalog__filter {
  width: 260px;
}
.catalog__grid {
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 24px 12px;
}
</style>
