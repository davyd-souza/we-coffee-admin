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

export function OrderDetails() {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Pedido: 125012sadj012jajsd</DialogTitle>
				<DialogDescription>Detalhes do pedido</DialogDescription>
			</DialogHeader>

			<Table>
				<TableBody>
					<TableRow>
						<TableCell>Status</TableCell>
						<TableCell>
							<div className="flex items-center gap-2">
								<span className="size-2 rounded-full bg-muted-foreground" />
								<span className="text-muted-foreground">Pendente</span>
							</div>
						</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Cliente</TableCell>
						<TableCell>Davyd Souza</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Telefone</TableCell>
						<TableCell>(19) 99999-9999</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>E-mail</TableCell>
						<TableCell>davyd@mail.com</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Realizado há</TableCell>
						<TableCell>5 minutos</TableCell>
					</TableRow>
				</TableBody>
			</Table>

			<Table>
				<TableHeader>
					<TableRow>
						<TableHead>Produto</TableHead>
						<TableHead>Qtd.</TableHead>
						<TableHead>Preço</TableHead>
						<TableHead>Subtotal</TableHead>
					</TableRow>
				</TableHeader>

				<TableBody>
					<TableRow>
						<TableCell>Flat Croissant Chocolate</TableCell>
						<TableCell>2</TableCell>
						<TableCell>R$ 16,00</TableCell>
						<TableCell>R$ 32,00</TableCell>
					</TableRow>

					<TableRow>
						<TableCell>Choco Dream</TableCell>
						<TableCell>1</TableCell>
						<TableCell>R$ 20,00</TableCell>
						<TableCell>R$ 20,00</TableCell>
					</TableRow>
				</TableBody>

				<TableFooter>
					<TableRow className="font-bold">
						<TableCell colSpan={3}>Total do pedido</TableCell>
						<TableCell>R$ 52,00</TableCell>
					</TableRow>
				</TableFooter>
			</Table>
		</DialogContent>
	)
}
