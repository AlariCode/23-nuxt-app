import { defineStore } from 'pinia';

export const useFavoritesStore = defineStore('favorites', () => {
	const authStore = useAuthStore();
	const favoriteIds = ref<number[]>([]);

	function isFavorite(id: number) {
		return favoriteIds.value.find(f => f == id);
	}

	function toggleFavorite(id: number) {
		if (!favoriteIds.value.includes(id)) {
			favoriteIds.value.push(id);
			return
		}
		favoriteIds.value = favoriteIds.value.filter(item => item != id);
		if (authStore.email) {
			save();
		}
	}

	async function save() {
		await $fetch<{ success: boolean }>('/api/favorites', {
			method: 'POST',
			body: {
				email: authStore.email,
				ids: favoriteIds.value
			}
		});
	}


	return { favoriteIds, toggleFavorite, isFavorite }
}, {
	persist: true
});