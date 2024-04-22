import { Link } from '@tanstack/react-router'
import type { ComponentProps, ReactNode } from 'react'

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
					<PaginationItem
						search={{
							page: 1,
						}}
						disabled={pageIndex === 0}
					>
						<ChevronsLeft className="size-4" />
						<PaginationLabel>Primeira página</PaginationLabel>
					</PaginationItem>

					<PaginationItem
						search={{
							page: pageIndex,
						}}
						disabled={pageIndex === 0}
					>
						<ChevronLeft className="size-4" />
						<PaginationLabel>Página anterior</PaginationLabel>
					</PaginationItem>

					<PaginationItem
						search={{
							page: pageIndex + 2,
						}}
						disabled={pageIndex === pages - 1}
					>
						<ChevronRight className="size-4" />
						<PaginationLabel>Próxima página</PaginationLabel>
					</PaginationItem>

					<PaginationItem
						search={{
							page: pages,
						}}
						disabled={pageIndex === pages - 1}
					>
						<ChevronsRight className="size-4" />
						<PaginationLabel>Última Página</PaginationLabel>
					</PaginationItem>
				</nav>
			</div>
		</section>
	)
}

type PaginationItemProps = ComponentProps<typeof Link>

function PaginationItem({ to, children, ...props }: PaginationItemProps) {
	return (
		<Link
			className="inline-flex size-8 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background p-0 font-medium text-sm ring-offset-background transition-colors aria-[disabled]:pointer-events-none hover:bg-accent hover:text-accent-foreground aria-[disabled]:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
			to={to}
			{...props}
		>
			{children}
		</Link>
	)
}

function PaginationLabel({ children }: { children: ReactNode }) {
	return <span className="sr-only">{children}</span>
}
