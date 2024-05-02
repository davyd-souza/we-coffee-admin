import { useQuery } from '@tanstack/react-query'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MetricsCardSkeleton } from './metrics-card-skeleton'
import { CardStatus } from '../card-status'

import { TicketX } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'

export function MonthCanceledOrdersAmountCard() {
	const { data: monthCanceledOrdersAmount, isPending } = useQuery({
		queryKey: ['metrics', 'month-canceled-orders-amount'],
		queryFn: getMonthCanceledOrdersAmount,
	})

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Cancelamentos (mês)
					<TicketX className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				{monthCanceledOrdersAmount && (
					<>
						<p className="font-bold text-2xl">
							{monthCanceledOrdersAmount.amount.toLocaleString('pt-br')}
						</p>

						<p className="text-muted-foreground text-xs">
							{monthCanceledOrdersAmount.diffFromLastMonth >= 0 ? (
								<>
									<CardStatus>
										{monthCanceledOrdersAmount.diffFromLastMonth}%
									</CardStatus>{' '}
									que mês passado
								</>
							) : (
								<>
									<CardStatus variant="negative">
										{monthCanceledOrdersAmount.diffFromLastMonth}%
									</CardStatus>{' '}
									que mês passado
								</>
							)}
						</p>
					</>
				)}

				{isPending && <MetricsCardSkeleton />}
			</CardContent>
		</Card>
	)
}
