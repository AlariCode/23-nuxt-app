<script setup lang="ts">
const favoriteStore = useFavoritesStore();
favoriteStore.addToFavorite(1);
</script>

<template>
  <div>{{ favoriteStore.favoriteIds[0] }}</div>
</template>
