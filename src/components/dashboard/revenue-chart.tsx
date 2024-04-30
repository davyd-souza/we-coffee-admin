import { useMemo, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import resolveConfig from 'tailwindcss/resolveConfig'

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
import { Label } from '@/components/ui/label'
import { DatePickerWithRange } from '@/components/ui/date-picker-with-range'

import { getDailyRevenueInPeriod } from '@/api/get-daily-revenue-in-period'
import tailwindConfig from '@/../tailwind.config.ts'

import type { DateRange } from "react-day-picker"

const tailwind = resolveConfig(tailwindConfig)

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: dayjs().subtract(7, 'days').toDate(),
    to: new Date()
  })

	const { data: dailyRevenueInPeriod } = useQuery({
		queryKey: ['metrics', 'daily-revenue-in-period', dateRange],
		queryFn: () => getDailyRevenueInPeriod({
      from: dateRange?.from,
      to: dateRange?.to
    }),
	})

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map(item => ({
      date: item.date,
      receipt: +item.receipt / 100
    }))
  }, [dailyRevenueInPeriod])

	return (
		<Card className="col-span-6 space-y-8">
			<CardHeader className="flex-row items-center justify-between space-y-1">
        <div>
          <CardTitle className="font-bold text-base">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>

        <div className='flex items-center gap-2'>
          <Label>Período</Label>
          <DatePickerWithRange date={dateRange} onDateChange={setDateRange} maxDays={7} />
        </div>
			</CardHeader>

			<CardContent>
				{dailyRevenueInPeriod && (
					<ResponsiveContainer width="100%" height={240}>
						<LineChart data={chartData} style={{ fontSize: 12 }}>
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
								dataKey="receipt"
								stroke={tailwind.theme.colors.primary.DEFAULT}
							/>
						</LineChart>
					</ResponsiveContainer>
				)}
			</CardContent>
		</Card>
	)
}
