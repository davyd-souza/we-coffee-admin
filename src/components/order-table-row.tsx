import { TableCell, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Check, Search, X } from 'lucide-react'

export function OrderTableRow() {
	return (
		<TableRow>
			<TableCell>
				<Button variant="outline" size="xs">
					<Search className="size-3" />
					<span className="sr-only">Detalhes do pedido</span>
				</Button>
			</TableCell>
			<TableCell className="font-mono text-xs">125012sadj012jajsd</TableCell>
			<TableCell className="text-muted-foreground">5 minutos</TableCell>
			<TableCell>
				<div className="flex items-center gap-2">
					<span className="size-2 rounded-full bg-muted-foreground" />
					<span className="text-muted-foreground">Pendente</span>
				</div>
			</TableCell>
			<TableCell className="font-medium">Davyd Souza</TableCell>
			<TableCell className="font-medium">R$ 31,99</TableCell>
			<TableCell>
				<Button variant="outline" size="xs" className="flex items-center gap-2">
					<Check className="size-3" />
					Aprovar
				</Button>
			</TableCell>
			<TableCell>
				<Button
					variant="outline"
					size="xs"
					className="flex items-center gap-2 text-destructive"
				>
					<X className="size-3" />
					Cancelar
				</Button>
			</TableCell>
		</TableRow>
	)
}
