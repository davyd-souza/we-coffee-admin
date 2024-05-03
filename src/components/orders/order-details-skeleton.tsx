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

export function OrderDetailsSkeleton() {
	return (
		<>
			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Status</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-32" />
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Cliente</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-32" />
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Telefone</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-32" />
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>E-mail</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-32" />
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Realizado há</TableCell>
						<TableCell className="flex justify-end">
							<Skeleton className="h-5 w-32" />
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
					<TableRow>
						<TableCell>
							<Skeleton className="h-5 w-[100%]" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-5 w-5" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-5 w-12" />
						</TableCell>
						<TableCell>
							<Skeleton className="h-5 w-12" />
						</TableCell>
					</TableRow>
				</TableBody>

				<TableFooter>
					<TableRow className="font-bold">
						<TableCell colSpan={3}>Total do pedido</TableCell>
						<TableCell>
							<Skeleton className="h-5 w-12" />
						</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</>
	)
}
