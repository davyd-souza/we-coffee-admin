import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

import { DollarSign } from 'lucide-react'

export function MonthRevenueCard() {
	return (
		<Card>
			<CardHeader>
				<CardTitle className="flex items-center justify-between gap-2 font-semibold text-base">
					Receita total (mês)
					<DollarSign className="size-5 text-muted-foreground" />
				</CardTitle>
			</CardHeader>

			<CardContent className="space-y-1">
				<p className="font-bold text-2xl tracking-tight">R$ 3104,40</p>

				<p className="text-muted-foreground text-xs">
					<span className="text-emerald-600 dark:text-emerald-400">+2%</span> em
					relação ao mês passado
				</p>
			</CardContent>
		</Card>
	)
}
