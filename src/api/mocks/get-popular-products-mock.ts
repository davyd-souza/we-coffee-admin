import { HttpResponse, http } from 'msw'

import type { GetPopularProductsResponse } from '../get-popoular-products'

export const getPopularProductsMock = http.get<
	never,
	never,
	GetPopularProductsResponse
>('/metrics/popular-products', () => {
	return HttpResponse.json([
		{ amount: 20, product: 'Product 1' },
		{ amount: 18, product: 'Product 2' },
		{ amount: 15, product: 'Product 3' },
		{ amount: 12, product: 'Product 4' },
		{ amount: 10, product: 'Product 5' },
	])
})
