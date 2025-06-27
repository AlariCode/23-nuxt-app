export const useAuthStore = defineStore('auth', () => {
	const token = ref<string | undefined>();

	function setToken(value: string) {
		token.value = value;
	}

	function clearToken() {
		token.value = undefined;
	}

	return { token, setToken, clearToken }
}, {
	persist: true
})