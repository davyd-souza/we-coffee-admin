import { api } from '@/lib/axios'

// TODO: change response to an Array of type below
export type GetDailyRevenueInPeriodResponse = {
	date: string
	receipt: number
}

export type GetDailyRevenueInPeriodParams = {
	from?: Date
	to?: Date
}

export async function getDailyRevenueInPeriod({
	from,
	to,
}: GetDailyRevenueInPeriodParams) {
	const response = await api.get<Array<GetDailyRevenueInPeriodResponse>>(
		'/metrics/daily-receipt-in-period',
		{
			params: {
				from,
				to,
			},
		},
	)

	return response.data
}
