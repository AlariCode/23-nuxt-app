// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-05-15',
	devtools: { enabled: true },
	routeRules: {
		'/about': { prerender: true },
		'/': { swr: true },
		'/catalog/**': { swr: 3600 },
	},
	runtimeConfig: {
		token: "",
		public: {
			apiurl: ""
		}
	},
	postcss: {
		plugins: {
			'postcss-nested': {},
		}
	},
	icon: {
		customCollections: [
			{
				prefix: "icons",
				dir: "./assets/icons",
			}
		]
	},
	modules: [
		'@nuxt/eslint',
		'@nuxt/fonts',
		'@nuxt/image',
		'@nuxt/scripts',
		'@nuxt/icon'
	]
})