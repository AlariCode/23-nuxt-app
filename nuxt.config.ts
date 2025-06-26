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
			apiurl: "",
			imageurl: ""
		}
	},
	postcss: {
		plugins: {
			'postcss-nested': {},
		}
	},
	app: {
		head: {
			link: [
				{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" }
			],
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
	modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/image', '@nuxt/scripts', '@nuxt/icon', '@pinia/nuxt']
})