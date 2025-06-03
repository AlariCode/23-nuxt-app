import type { RouterConfig } from 'nuxt/schema';

export default {
	routes: (_routes) => [
		{
			name: 'home',
			path: '/home',
			component: () => import('~/pages/index.vue')
		}
	],
} satisfies RouterConfig