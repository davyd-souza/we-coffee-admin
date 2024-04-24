import { useState } from 'react'

import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

import { Check, Search, X } from 'lucide-react'

import dayjs from 'dayjs'
import { formatToBRL } from '@/utils/formatToBRL'

type OrderTableRowProps = {
	order: {
		orderId: string
		createdAt: string
		status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
		customerName: string
		total: number
	}
}

export function OrderTableRow({ order }: OrderTableRowProps) {
	const [open, setOpen] = useState(false)

	return (
		<TableRow>
			<TableCell>
				<Dialog open={open} onOpenChange={setOpen}>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="size-3" />
							<span className="sr-only">Detalhes do pedido</span>
						</Button>
					</DialogTrigger>

					<OrderDetails open={open} orderId={order.orderId} />
				</Dialog>
			</TableCell>
			<TableCell className="font-mono text-xs">{order.orderId}</TableCell>
			<TableCell
				className="text-muted-foreground"
				title={dayjs(order.createdAt).format('DD/MM/YYYY HH:MM:ss')}
			>
				{dayjs(order.createdAt).fromNow()}
			</TableCell>
			<TableCell>
				<OrderStatus status={order.status} />
			</TableCell>
			<TableCell className="font-medium">{order.customerName}</TableCell>
			<TableCell className="font-medium">
				{formatToBRL(order.total / 100)}
			</TableCell>
			<TableCell>
				<Button size="xs" className="flex items-center gap-2">
					<Check className="size-3" />
					Aprovar
				</Button>
			</TableCell>
			<TableCell>
				<Button variant="outline" size="xs" className="flex items-center gap-2">
					<X className="size-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	)
}
