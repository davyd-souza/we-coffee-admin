import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Building, ChevronDown, LogOut } from 'lucide-react'

export function AccountMenu() {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex select-none items-center gap-2"
				>
					Liberdade
					<ChevronDown className="size-4" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="min-w-52" align="end">
				<DropdownMenuLabel className="flex flex-col">
					<span>Davyd Souza</span>
					<span className="font-normal text-muted-foreground text-xs">
						davyd.souza@mail.com
					</span>
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="flex gap-2">
					<Building className="size-4" />
					Perfil da loja
				</DropdownMenuItem>

				<DropdownMenuItem className="flex gap-2 text-destructive">
					<LogOut className="size-4" />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
