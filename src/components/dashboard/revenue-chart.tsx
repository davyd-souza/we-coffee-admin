import {
	CartesianGrid,
	Line,
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
} from 'recharts'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const DATA = [
	{ date: '10/12', revenue: 2192 },
	{ date: '11/12', revenue: 1252 },
	{ date: '12/12', revenue: 490 },
	{ date: '13/12', revenue: 1289 },
	{ date: '14/12', revenue: 2941 },
	{ date: '15/12', revenue: 832 },
	{ date: '16/12', revenue: 1831 },
	{ date: '17/12', revenue: 293 },
]

import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/../tailwind.config.ts'

const tailwind = resolveConfig(tailwindConfig)

export function RevenueChart() {
	return (
		<Card className="col-span-6 space-y-8">
			<CardHeader className="space-y-1">
				<CardTitle className="font-bold text-base">
					Receita no período
				</CardTitle>
				<CardDescription>Receita diária no período</CardDescription>
			</CardHeader>

			<CardContent>
				<ResponsiveContainer width="100%" height={240}>
					<LineChart data={DATA} style={{ fontSize: 12 }}>
						<CartesianGrid vertical={false} className="stroke-muted" />

						<YAxis
							stroke={tailwind.theme.colors.muted.foreground}
							axisLine={false}
							tickLine={false}
							width={80}
							tickFormatter={(value: number) =>
								value.toLocaleString('pt-br', {
									style: 'currency',
									currency: 'BRL',
								})
							}
							dataKey="revenue"
						/>

						<XAxis
							stroke={tailwind.theme.colors.muted.foreground}
							tickLine={false}
							axisLine={false}
							dy={16}
							dataKey="date"
						/>

						<Line
							type="linear"
							strokeWidth={2}
							dataKey="revenue"
							stroke={tailwind.theme.colors.primary.DEFAULT}
						/>
					</LineChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}
