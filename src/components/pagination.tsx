import { Button } from '@/components/ui/button'
import {
	ChevronLeft,
	ChevronRight,
	ChevronsLeft,
	ChevronsRight,
} from 'lucide-react'

type PaginationProps = {
	pageIndex: number
	totalCount: number
	perPage: number
}

export function Pagination({
	pageIndex,
	totalCount,
	perPage,
}: PaginationProps) {
	const pages = Math.ceil(totalCount / perPage) || 1

	return (
		<section className="flex items-center justify-between">
			<p className="text-muted-foreground text-sm">
				Total de {totalCount} item(s)
			</p>

			<div className="flex items-center gap-2 lg:gap-4">
				<p className="font-medium text-sm">
					Página {pageIndex + 1} de {pages}
				</p>

				<nav aria-label="pagination" className="space-x-2">
					<Button variant="outline" className="size-8 p-0">
						<ChevronsLeft className="size-4" />
						<span className="sr-only">Primeira página</span>
					</Button>
					<Button variant="outline" className="size-8 p-0">
						<ChevronLeft className="size-4" />
						<span className="sr-only">Página anterior</span>
					</Button>
					<Button variant="outline" className="size-8 p-0">
						<ChevronRight className="size-4" />
						<span className="sr-only">Próxima anterior</span>
					</Button>
					<Button variant="outline" className="size-8 p-0">
						<ChevronsRight className="size-4" />
						<span className="sr-only">Ultima página</span>
					</Button>
				</nav>
			</div>
		</section>
	)
}
