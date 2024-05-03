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
import { OrderStatus } from './order-status'
import { toast } from 'sonner'
import { OrderDetailsSkeleton } from '@/components/orders/order-details-skeleton'

import dayjs from 'dayjs'
import { formatToBRL } from '@/utils/formatToBRL'

type OrderDetailsProps = {
	open: boolean
	orderId: string
}

export function OrderDetails({ open, orderId }: OrderDetailsProps) {
	const { data: order, isError, isLoading } = useOrder({ open, orderId })

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

			{isLoading && <OrderDetailsSkeleton />}

			{order && (
				<>
					<Table>
						<TableBody>
							<TableRow>
								<TableCell>Status</TableCell>

								<TableCell className="flex justify-end">
									<OrderStatus status={order.status} />
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Cliente</TableCell>

								<TableCell className="flex justify-end">
									{order.customer.name}
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Telefone</TableCell>

								<TableCell className="flex justify-end">
									{order.customer.phone ?? (
										<span className="text-muted-foreground">N/A</span>
									)}
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>E-mail</TableCell>

								<TableCell className="flex justify-end">
									{order.customer.email}
								</TableCell>
							</TableRow>

							<TableRow>
								<TableCell>Realizado há</TableCell>

								<TableCell className="flex justify-end">
									{dayjs(order.createdAt).fromNow()}
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
							{order.orderItems.map(
								({ id, priceInCents, product, quantity }) => (
									<TableRow key={id}>
										<TableCell>{product.name}</TableCell>
										<TableCell>{quantity}</TableCell>
										<TableCell>{formatToBRL(priceInCents / 100)}</TableCell>
										<TableCell>
											{formatToBRL((priceInCents / 100) * quantity)}
										</TableCell>
									</TableRow>
								),
							)}
						</TableBody>

						<TableFooter>
							<TableRow className="font-bold">
								<TableCell colSpan={3}>Total do pedido</TableCell>

								<TableCell>{formatToBRL(order.totalInCents / 100)}</TableCell>
							</TableRow>
						</TableFooter>
					</Table>
				</>
			)}
		</DialogContent>
	)
}
