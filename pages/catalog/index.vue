<script setup lang="ts">
import type { GetCategoriesResponse } from "~/interfaces/category.interface";
import type { Product } from "~/interfaces/product.interface";

const config = useRuntimeConfig();
const API_URL = config.public.apiurl;
const select = ref("");

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

const product: Product = {
  id: 1,
  name: "Lira Earrings",
  price: 20,
  short_description: "Элегантные золотистые серьги-кольца",
  long_description:
    "Отлично подойдут к любому гардеробу. Чистое золото высокой пробы, которое не оставит вас равнодушными к качеству изделия.",
  sku: "12",
  discount: 0,
  images: [
    "/images/jewelry/lira1.jpg",
    "/images/jewelry/lira2.jpg",
    "/images/jewelry/lira3.jpg",
    "/images/jewelry/lira4.jpg",
  ],
  category_id: 1,
  category: {
    id: 1,
    name: "Серьги",
    alias: "earrings",
  },
  created_at: new Date(),
  updated_at: new Date(),
};
</script>

<template>
  <div>
    <h1 class="left">Каталог товаров</h1>
    <div class="catalog">
      <div class="catalog__filter">
        <SelectField v-model="select" :options="categoriesSelect" />
      </div>
      <div>
        <CatalogCard v-bind="product" />
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
</style>
