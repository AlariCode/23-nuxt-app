import type { Category } from './category.interface';

export interface Product {
	id: number;
	name: string;
	price: number;
	short_description: string;
	long_description: string;
	sku: string;
	discount: number;
	images: string[];
	category_id: number;
	category: Category;
	created_at: Date;
	updated_at: Date;
}