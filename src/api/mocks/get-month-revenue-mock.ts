import { HttpResponse, http } from 'msw'

import type { GetMonthRevenueResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
	never,
	never,
	GetMonthRevenueResponse
>('/metrics/month-receipt', () => {
	return HttpResponse.json({
		receipt: 2000,
		diffFromLastMonth: -1,
	})
})
