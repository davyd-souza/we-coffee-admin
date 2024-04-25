import { useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { OrderDetails } from './order-details'
import { OrderStatus } from './order-status'
import { toast } from 'sonner'

import { BadgeCheck, Check, Search, Truck, X } from 'lucide-react'

import { cancelOrder } from '@/api/cancel-order'
import { formatToBRL } from '@/utils/formatToBRL'
import { approveOrder } from '@/api/approve-order'
import { dispatchOrder } from '@/api/dispatch-order'
import { deliverOrder } from '@/api/deliver-order'
import type { GetOrdersResponse } from '@/api/get-orders'
import dayjs from 'dayjs'

const messageMap: Record<Exclude<OrderStatus, 'pending'>, string> = {
	canceled: 'foi cancelado com sucesso',
	processing: 'está em preparo',
	delivering: 'está em rota de entrega',
	delivered: 'foi entregue',
}

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

	function updateOrderStatusCache({
		orderId,
		status,
	}: { orderId: string; status: OrderStatus }) {
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
						return { ...order, status }
					}

					return order
				}),
			})
		}

		toast.success(
			`O pedido ${orderId} ${
				messageMap[status as Exclude<OrderStatus, 'pending'>]
			}!`,
		)
	}

	const { mutateAsync: cancelOrderFn, isPending: isCancelingOrder } =
		useMutation({
			mutationFn: cancelOrder,
			onSuccess(_, { orderId }) {
				updateOrderStatusCache({ orderId, status: 'canceled' })
			},
		})

	const { mutateAsync: approveOrderFn, isPending: isApprovingOrder } =
		useMutation({
			mutationFn: approveOrder,
			onSuccess(_, { orderId }) {
				updateOrderStatusCache({ orderId, status: 'processing' })
			},
		})

	const { mutateAsync: dispatchOrderFn, isPending: isDispatchingOrder } =
		useMutation({
			mutationFn: dispatchOrder,
			onSuccess(_, { orderId }) {
				updateOrderStatusCache({ orderId, status: 'delivering' })
			},
		})

	const { mutateAsync: deliverOrderFn, isPending: isDeliveringOrder } =
		useMutation({
			mutationFn: deliverOrder,
			onSuccess(_, { orderId }) {
				updateOrderStatusCache({ orderId, status: 'delivered' })
			},
		})

	const isCancelButtonDisabled =
		!['pending', 'processing'].includes(order.status) ||
		isCancelingOrder ||
		isApprovingOrder

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
				{order.status === 'pending' && (
					<Button
						size="xs"
						className="flex items-center gap-2"
						disabled={isApprovingOrder}
						onClick={() => approveOrderFn({ orderId: order.orderId })}
					>
						<Check className="size-4" />
						Aprovar
					</Button>
				)}

				{order.status === 'processing' && (
					<Button
						size="xs"
						className="flex items-center gap-2"
						disabled={isDispatchingOrder}
						onClick={() => dispatchOrderFn({ orderId: order.orderId })}
					>
						<Truck className="size-4" />
						Em rota
					</Button>
				)}

				{order.status === 'delivering' && (
					<Button
						size="xs"
						className="flex items-center gap-2"
						disabled={isDeliveringOrder}
						onClick={() => deliverOrderFn({ orderId: order.orderId })}
					>
						<BadgeCheck className="size-4" />
						Entregue
					</Button>
				)}
			</TableCell>

			<TableCell>
				<Button
					disabled={isCancelButtonDisabled}
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
