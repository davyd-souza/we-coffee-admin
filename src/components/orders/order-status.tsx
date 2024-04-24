type OrderStatus =
	| 'pending'
	| 'canceled'
	| 'processing'
	| 'delivering'
	| 'delivered'

type OrderStatusProps = {
	status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
	canceled: 'Cancelado',
	delivered: 'Entregue',
	delivering: 'Em Rota',
	pending: 'Pendente',
	processing: 'Em Andamento',
}

export function OrderStatus({ status }: OrderStatusProps) {
	return (
		<div className="flex items-center gap-2">
			{status === 'canceled' && (
				<span className="size-2 rounded-full bg-rose-600 dark:bg-rose-400" />
			)}

			{status === 'delivered' && (
				<span className="size-2 rounded-full bg-emerald-600 dark:bg-emerald-400" />
			)}

			{status === 'pending' && (
				<span className="size-2 rounded-full bg-muted-foreground" />
			)}

			{['processing', 'delivering'].includes(status) && (
				<span className="size-2 rounded-full bg-amber-500 dark:bg-amber-400" />
			)}

			<span className="text-muted-foreground">{orderStatusMap[status]}</span>
		</div>
	)
}
