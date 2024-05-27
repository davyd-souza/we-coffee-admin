import { HttpResponse, http } from 'msw'

import type { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
	never,
	never,
	Array<GetDailyRevenueInPeriodResponse>
>('/metrics/daily-receipt-in-period', () => {
	return HttpResponse.json([
		{ date: '19/05/2024', receipt: 1200 },
		{ date: '20/05/2024', receipt: 1500 },
		{ date: '21/05/2024', receipt: 3000 },
		{ date: '22/05/2024', receipt: 2300 },
		{ date: '23/05/2024', receipt: 2000 },
		{ date: '24/05/2024', receipt: 2400 },
		{ date: '25/05/2024', receipt: 1300 },
	])
})
