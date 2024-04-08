import { Cell, Pie, PieChart, ResponsiveContainer } from 'recharts'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card'

const DATA = [
	{ product: 'Oreo Shake', amount: 73 },
	{ product: 'Croissant Bacon', amount: 61 },
	{ product: 'Flat Croissant Chocolate', amount: 47 },
	{ product: 'Caramelo Macchiato', amount: 39 },
	{ product: 'Framboesa Duo Salty Cream', amount: 23 },
]

const COLORS = [
	{
		light: '#4056F4',
		dark: '#769bff',
	},
	{
		light: '#00CC66',
		dark: '#33F593',
	},
	{
		light: '#7C6350',
		dark: '#BAA88c',
	},
	{
		light: '#0E9594',
		dark: '#2ED3CB',
	},
	{
		light: '#FAA916',
		dark: '#FAA916',
	},
]

export function PopularProductsChart() {
	const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light'

	return (
		<Card className="col-span-3">
			<CardHeader className="space-y-1">
				<CardTitle className="font-bold text-base">
					Produtos populares
				</CardTitle>
				<CardDescription>Items mais comprados no período</CardDescription>
			</CardHeader>

			<CardContent>
				<ResponsiveContainer width="100%" height={240}>
					<PieChart>
						<Pie
							data={DATA}
							nameKey="product"
							dataKey="amount"
							cx="50%"
							cy="50%"
							innerRadius={64}
							outerRadius={86}
							strokeWidth={8}
							labelLine={false}
							label={({
								cx,
								cy,
								midAngle,
								innerRadius,
								outerRadius,
								value,
								index,
							}) => {
								const RADIAN = Math.PI / 180
								const radius = 12 + innerRadius + (outerRadius - innerRadius)
								const x = cx + radius * Math.cos(-midAngle * RADIAN)
								const y = cy + radius * Math.sin(-midAngle * RADIAN)

								return (
									<text
										x={x}
										y={y}
										className="fill-muted-foreground text-xs"
										textAnchor={x > cx ? 'start' : 'end'}
										dominantBaseline="central"
									>
										{DATA[index].product.length > 12
											? DATA[index].product.substring(0, 12).concat('...')
											: DATA[index].product}{' '}
										({value})
									</text>
								)
							}}
						>
							{DATA.map((_, index) => (
								<Cell
									key={`cell-${index}`}
									fill={COLORS[index][systemTheme]}
									className="stroke-background hover:opacity-80"
								/>
							))}
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</CardContent>
		</Card>
	)
}
