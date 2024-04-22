import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { OrderDetails } from './order-details'

import { Check, Search, X } from 'lucide-react'
import { OrderStatus } from './order-status'
import dayjs from 'dayjs'

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
	return (
		<TableRow>
			<TableCell>
				<Dialog>
					<DialogTrigger asChild>
						<Button variant="outline" size="xs">
							<Search className="size-3" />
							<span className="sr-only">Detalhes do pedido</span>
						</Button>
					</DialogTrigger>

					<OrderDetails />
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
				{order.total.toLocaleString('pt-br', {
					style: 'currency',
					currency: 'BRL',
				})}
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
