import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Coffee } from 'lucide-react'

export function MonthOrdersAmountCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Pedidos (mês)
					<Coffee className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				<p className="font-bold text-2xl">315</p>
				<p className="text-muted-foreground text-xs">
					<span className="text-rose-500 dark:text-rose-400">-2%</span> em
					relação ao mês passado
				</p>
			</CardContent>
		</Card>
	)
}
