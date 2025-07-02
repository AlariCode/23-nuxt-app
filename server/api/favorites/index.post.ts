import type { CreateFavorite } from '~/interfaces/favorite.interface';

export default defineEventHandler(async (event) => {
	const { email, ids } = await readBody<CreateFavorite>(event);
	await useStorage('db').setItem(email, ids);
	setResponseStatus(event, 201);
	return { success: true }
});