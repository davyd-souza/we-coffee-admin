import { useQuery } from '@tanstack/react-query'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { CardStatus } from '../card-status'

import { getMonthOrdersAmount } from '@/api/get-month-orders-amount'

import { Coffee } from 'lucide-react'

export function MonthOrdersAmountCard() {
	const { data: monthOdersAmount, isPending } = useQuery({
		queryKey: ['metrics', 'month-orders-amount'],
		queryFn: getMonthOrdersAmount,
	})

	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Pedidos (mês)
					<Coffee className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				{monthOdersAmount && (
					<>
						<p className="font-bold text-2xl">
							{monthOdersAmount.amount.toLocaleString('pt-br')}
						</p>

						<p className="text-muted-foreground text-xs">
							{monthOdersAmount.diffFromLastMonth >= 0 ? (
								<>
									<CardStatus>{monthOdersAmount.diffFromLastMonth}%</CardStatus>{' '}
									em relação ao mês passado
								</>
							) : (
								<>
									<CardStatus variant="negative">
										{monthOdersAmount.diffFromLastMonth}%
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
