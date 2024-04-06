import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TicketX } from 'lucide-react'

export function MonthCanceledOrdersAmountCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Cancelamentos (mês)
					<TicketX className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				<p className="font-bold text-2xl">24</p>
				<p className="text-muted-foreground text-xs">
					<span className="text-emerald-500 dark:text-emerald-400">-10%</span>{' '}
					que mês passado
				</p>
			</CardContent>
		</Card>
	)
}
