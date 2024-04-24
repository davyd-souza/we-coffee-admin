import { useOrder } from '@/hooks/useOrder'

import {
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/dialog'
import {
	Table,
	TableBody,
	TableCell,
	TableFooter,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Skeleton } from '@/components/ui/skeleton'
import { OrderStatus } from './order-status'
import { toast } from 'sonner'

import dayjs from 'dayjs'
import { formatToBRL } from '@/utils/formatToBRL'

type OrderDetailsProps = {
	open: boolean
	orderId: string
}

export function OrderDetails({ open, orderId }: OrderDetailsProps) {
	const { data: order, isError } = useOrder({ open, orderId })

	if (isError) {
		toast.error('Não foi possível encontrar os detalhes do pedido.')

		return
	}

	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Pedido: {orderId}</DialogTitle>
				<DialogDescription>Detalhes do pedido</DialogDescription>
			</DialogHeader>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Status</TableCell>
						<TableCell className="flex justify-end">
							{order ? (
								<OrderStatus status={order.status} />
							) : (
								<Skeleton className="h-4 w-32" />
							)}
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Cliente</TableCell>
						<TableCell className="flex justify-end">
							{order ? order.customer.name : <Skeleton className="h-4 w-32" />}
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Telefone</TableCell>
						<TableCell className="flex justify-end">
							{order ? (
								order.customer.phone ?? (
									<span className="text-muted-foreground">N/A</span>
								)
							) : (
								<Skeleton className="h-4 w-32" />
							)}
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>E-mail</TableCell>
						<TableCell className="flex justify-end">
							{order ? order.customer.email : <Skeleton className="h-4 w-32" />}
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Realizado há</TableCell>
						<TableCell className="flex justify-end">
							{order ? (
								dayjs(order.createdAt).fromNow()
							) : (
								<Skeleton className="h-4 w-32" />
							)}
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead className="w-[50%]">Produto</TableHead>
						<TableHead className="w-[10%]">Qtd.</TableHead>
						<TableHead className="w-[20%]">Preço</TableHead>
						<TableHead className="w-[20%]">Subtotal</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					{order ? (
						order.orderItems.map(({ id, priceInCents, product, quantity }) => (
							<TableRow key={id}>
								<TableCell>{product.name}</TableCell>
								<TableCell>{quantity}</TableCell>
								<TableCell>{formatToBRL(priceInCents / 100)}</TableCell>
								<TableCell>
									{formatToBRL((priceInCents / 100) * quantity)}
								</TableCell>
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell>
								<Skeleton className="h-4 w-[100%]" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-5" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-12" />
							</TableCell>
							<TableCell>
								<Skeleton className="h-4 w-12" />
							</TableCell>
						</TableRow>
					)}
				</TableBody>

				<TableFooter>
					<TableRow className="font-bold">
						<TableCell colSpan={3}>Total do pedido</TableCell>
						<TableCell>
							{order ? (
								formatToBRL(order.totalInCents / 100)
							) : (
								<Skeleton className="h-4 w-12" />
							)}
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</DialogContent>
	)
}
