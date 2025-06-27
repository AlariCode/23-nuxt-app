import { defineStore } from 'pinia';
import type { GetCategoriesResponse } from '~/interfaces/category.interface';

export const useFavoritesStore = defineStore('favorites', () => {
	const favoriteIds = ref<number[]>([]);

	function addToFavorite(id: number) {
		if (!favoriteIds.value.includes(id)) {
			favoriteIds.value.push(id);
		}
	}

	function removeFromFavorite(id: number) {
		favoriteIds.value = favoriteIds.value.filter(item => item != id);
	}

	async function fetchFavorites() {
		const data = await $fetch<GetCategoriesResponse>("http://localhost:3000/api/categories");
		favoriteIds.value = data.categories.map(c => c.id)
	}

	return { favoriteIds, addToFavorite, removeFromFavorite, fetchFavorites }
});