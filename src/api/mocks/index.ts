import { env } from '@/env'
import { setupWorker } from 'msw/browser'

import { signInMock } from './sign-in-mock'
import { registerFranchiseMock } from './register-franchise-mock'
import { getMonthOrdersAmountMock } from './get-month-oders-amount-mock'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getPopularProductsMock } from './get-popular-products-mock'

export const worker = setupWorker(
	signInMock,
	registerFranchiseMock,
	getMonthOrdersAmountMock,
	getMonthCanceledOrdersAmountMock,
	getMonthRevenueMock,
	getDayOrdersAmountMock,
	getDailyRevenueInPeriodMock,
	getPopularProductsMock,
)

export async function enableMSW() {
	if (env.MODE !== 'test') {
		return
	}

	await worker.start()
}
