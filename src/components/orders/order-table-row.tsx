import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'

import { Check, Search, X } from 'lucide-react'

import { cancelOrder } from '@/api/cancel-order'
import { formatToBRL } from '@/utils/formatToBRL'
import dayjs from 'dayjs'

import type { GetOrdersResponse } from '@/api/get-orders'
import { toast } from 'sonner'

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

	const queryClient = useQueryClient()

	const { mutateAsync: cancelOrderFn } = useMutation({
		mutationFn: cancelOrder,
		onSuccess(_, { orderId }) {
			const ordersListCache = queryClient.getQueriesData<GetOrdersResponse>({
				queryKey: ['orders'],
			})

			for (const [cacheKey, cacheData] of ordersListCache) {
				if (!cacheData) {
					return
				}

				queryClient.setQueryData<GetOrdersResponse>(cacheKey, {
					...cacheData,
					orders: cacheData.orders.map((order) => {
						if (order.orderId === orderId) {
							return { ...order, status: 'canceled' }
						}

						return order
					}),
				})
			}

			toast.success(`O pedido ${orderId} foi cancelado com sucesso!`)
		},
	})

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
				<Button
					disabled={!['pending', 'processing'].includes(order.status)}
					variant="outline"
					size="xs"
					className="flex items-center gap-2"
					onClick={() => cancelOrderFn({ orderId: order.orderId })}
				>
					<X className="size-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	)
}
