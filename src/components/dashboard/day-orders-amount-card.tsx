import { useQuery } from '@tanstack/react-query'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CardStatus } from '../card-status'
import { MetricsCardSkeleton } from './metrics-card-skeleton'

import { Coffee } from 'lucide-react'

import { getDayOrdersAmount } from '@/api/get-day-orders-amount'

export function DayOrdersAmountCard() {
	const { data: dayOrdersAmount, isPending } = useQuery({
		queryKey: ['metrics', 'day-orders-amount'],
		queryFn: getDayOrdersAmount,
	})

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Pedidos (dia)
					<Coffee className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				{dayOrdersAmount && (
					<>
						<p className="font-bold text-2xl">
							{dayOrdersAmount.amount.toLocaleString('pt-br')}
						</p>

						<p className="text-muted-foreground text-xs">
							{dayOrdersAmount.diffFromYesterday >= 0 ? (
								<>
									<CardStatus>{dayOrdersAmount.diffFromYesterday}%</CardStatus>{' '}
									em relação a ontem
								</>
							) : (
								<>
									<CardStatus variant="negative">
										{dayOrdersAmount.diffFromYesterday}%
									</CardStatus>{' '}
									em relação a ontem
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
