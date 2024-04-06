import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Coffee } from 'lucide-react'

export function DayOrdersAmountCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Pedidos (dia)
					<Coffee className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent>
				<p className="font-bold text-2xl">32</p>
				<p className="text-muted-foreground text-xs">
					<span className="text-emerald-500 dark:text-emerald-400">+5%</span> a
					mais que ontem
				</p>
			</CardContent>
		</Card>
	)
}
