import { useQuery } from '@tanstack/react-query'

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CardStatus } from '../card-status'

import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { formatToBRL } from '@/utils/formatToBRL'

export function MonthRevenueCard() {
	const { data: monthRevenue, isPending } = useQuery({
		queryKey: ['metrics', 'month-revenue'],
		queryFn: getMonthRevenue,
	})

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Receita total (mês)
					<DollarSign className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent className="space-y-1">
				{monthRevenue && (
					<>
						<p className="font-bold text-2xl tracking-tight">
							{formatToBRL(monthRevenue.receipt / 100)}
						</p>

						<p className="text-muted-foreground text-xs">
							{monthRevenue.diffFromLastMonth >= 0 ? (
								<>
									<CardStatus variant="positive">
										{monthRevenue.diffFromLastMonth}%
									</CardStatus>{' '}
									em relação ao mês passado
								</>
							) : (
								<>
									<CardStatus variant="negative">
										{monthRevenue.diffFromLastMonth}%
									</CardStatus>{' '}
									em relação ao mês passado
								</>
							)}
						</p>
					</>
				)}

				{isPending && (
					<div className="space-y-1">
						<Skeleton className="h-8 w-12" />
						<Skeleton className="h-4 w-32" />
					</div>
				)}
			</CardContent>
		</Card>
	)
}
