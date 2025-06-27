import { defineStore } from 'pinia';

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

	function isFavorite(id: number) {
		return favoriteIds.value.find(f => f == id);
	}

	function toggleFavorite(id: number) {
		if (!favoriteIds.value.includes(id)) {
			favoriteIds.value.push(id);
			return
		}
		favoriteIds.value = favoriteIds.value.filter(item => item != id);
	}


	return { favoriteIds, addToFavorite, removeFromFavorite, toggleFavorite, isFavorite }
}, {
	persist: true
});