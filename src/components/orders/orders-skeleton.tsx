import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

import {
	ChevronDown,
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
	Search,
	X,
} from 'lucide-react'

export function OrdersSkeleton() {
	const orderRowSkeletons = Array.from({ length: 10 })

	return (
		<>
			<section className="flex flex-col gap-2">
				<h1 className="font-bold text-3xl tracking-tight">Pedidos</h1>
			</section>

			<section className="flex justify-end">
				<Button disabled variant="outline" className="gap-2">
					Colunas
					<ChevronDown className="size-4" />
				</Button>
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
						{orderRowSkeletons.map((_, index) => (
							<TableRow key={index}>
								<TableCell>
									<Button disabled variant="outline" size="xs">
										<Search className="size-3" />
										<span className="sr-only">Detalhes do pedido</span>
									</Button>
								</TableCell>

								<TableCell>
									<Skeleton className="h-5 w-full" />
								</TableCell>

								<TableCell>
									<Skeleton className="h-5 w-20" />
								</TableCell>

								<TableCell>
									<div className="flex items-center gap-2">
										<Skeleton className="size-2 rounded-full" />
										<Skeleton className="h-5 w-20" />
									</div>
								</TableCell>

								<TableCell className="font-medium">
									<Skeleton className="h-5 w-40" />
								</TableCell>

								<TableCell className="font-medium">
									<Skeleton className="h-5 w-20" />
								</TableCell>

								<TableCell>
									<Skeleton className="h-8 w-full" />
								</TableCell>

								<TableCell>
									<Skeleton className="h-8 w-full" />
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</main>

			<section className="flex items-center justify-between">
				<p className="flex items-center gap-1 text-muted-foreground text-sm">
					Total de <Skeleton className="inline-block h-4 w-6" /> item(s)
				</p>

				<div className="flex items-center gap-2 lg:gap-4">
					<p className="flex items-center gap-1 font-medium text-sm">
						Página <Skeleton className="inline-block h-4 w-5" /> de{' '}
						<Skeleton className="inline-block h-4 w-5" />
					</p>

					<nav aria-label="pagination" className="space-x-2">
						<Button variant="outline" className="size-8 p-0" disabled>
							<ChevronsLeft className="size-4" />
						</Button>

						<Button variant="outline" className="size-8 p-0" disabled>
							<ChevronLeft className="size-4" />
						</Button>

						<Button variant="outline" className="size-8 p-0" disabled>
							<ChevronRight className="size-4" />
						</Button>

						<Button variant="outline" className="size-8 p-0" disabled>
							<ChevronsRight className="size-4" />
						</Button>
					</nav>
				</div>
			</section>
		</>
	)
}
