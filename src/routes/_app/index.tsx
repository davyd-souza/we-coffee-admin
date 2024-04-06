import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

import { MonthRevenueCard } from '@/components/dashboard/month-revenue-card'
import { MonthOrdersAmountCard } from '@/components/dashboard/month-orders-amount-card'
import { DayOrdersAmountCard } from '@/components/dashboard/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from '@/components/dashboard/month-canceled-orders-amount-card'

function Dashboard() {
	return (
		<>
			<Helmet title="Home" />

			<section className="flex flex-col gap-2">
				<h1 className="font-bold text-3xl tracking-tight">Dashboard</h1>
			</section>

			<section className="grid grid-cols-4 gap-4">
				<MonthRevenueCard />
				<MonthOrdersAmountCard />
				<DayOrdersAmountCard />
				<MonthCanceledOrdersAmountCard />
			</section>
		</>
	)
}

export const Route = createFileRoute('/_app/')({ component: Dashboard })
