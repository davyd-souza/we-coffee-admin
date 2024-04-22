import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { getOrdersOptions } from '@/hooks/useOrders'
import { useSuspenseQuery } from '@tanstack/react-query'
import { z } from 'zod'

import { OrderTableRow } from '@/components/orders/order-table-row'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuCheckboxItem,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
	Table,
	TableBody,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Pagination } from '@/components/pagination'

import { ChevronDown } from 'lucide-react'

const ordersSearchSchema = z.object({
	page: z.number().catch(1),
})

export const Route = createFileRoute('/_app/orders')({
	component: Orders,
	validateSearch: ordersSearchSchema,
	loaderDeps: (opts) => ({ pageIndex: opts.search.page - 1 }),
	loader: (opts) =>
		opts.context.queryClient.ensureQueryData(
			getOrdersOptions({ pageIndex: opts.deps.pageIndex }),
		),
	pendingComponent: () => <p>Loading...</p>,
})

function Orders() {
	const { page } = Route.useSearch()

	const ordersQuery = useSuspenseQuery(
		getOrdersOptions({ pageIndex: page - 1 }),
	)
	const { meta, orders } = ordersQuery.data

	// const { data: ordersResult } = useOrders({ pageIndex: page - 1 })

	return (
		<>
			<Helmet title="Pedidos" />

			<section className="flex flex-col gap-2">
				<h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>
			</section>

			<section className="flex justify-end">
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button
							variant="outline"
							className="flex items-center gap-2 font-medium"
						>
							Colunas
							<ChevronDown className="size-4" />
						</Button>
					</DropdownMenuTrigger>

					<DropdownMenuContent align="end">
						<DropdownMenuCheckboxItem checked>ID</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem checked>
							Realizado há
						</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem checked>Status</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem checked>Cliente</DropdownMenuCheckboxItem>
						<DropdownMenuCheckboxItem checked>
							Total do pedido
						</DropdownMenuCheckboxItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</section>

			<main className="rounded-md border">
				<Table>
					<TableHeader>
						<TableRow>
							<TableHead className="w-[5%]" />
							<TableHead className="w-[10%]">ID</TableHead>
							<TableHead className="w-[10%]">Realizado há</TableHead>
							<TableHead className="w-[10%]">Status</TableHead>
							<TableHead className="w-[30%]">Cliente</TableHead>
							<TableHead className="w-[15%]">Total do pedido</TableHead>
							<TableHead className="w-[5%]" />
							<TableHead className="w-[5%]" />
						</TableRow>
					</TableHeader>
					<TableBody>
						{/* {ordersResult?.orders.map((order) => ( */}
						{orders.map((order) => (
							<OrderTableRow key={order.orderId} order={order} />
						))}
					</TableBody>
				</Table>
			</main>

			<Pagination
				pageIndex={meta.pageIndex}
				perPage={meta.perPage}
				totalCount={meta.totalCount}
			/>
		</>
	)
}
