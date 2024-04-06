import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

import { OrderTableRow } from '@/components/order-table-row'
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

import { ChevronDown } from 'lucide-react'
import { Pagination } from '@/components/pagination'

function Orders() {
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
						<OrderTableRow />
					</TableBody>
				</Table>
			</main>

			<Pagination pageIndex={0} perPage={10} totalCount={124} />
		</>
	)
}

export const Route = createFileRoute('/_app/orders')({ component: Orders })
