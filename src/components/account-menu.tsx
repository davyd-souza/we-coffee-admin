import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuPortal,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuSub,
	DropdownMenuSubContent,
	DropdownMenuSubTrigger,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { Building, ChevronDown, LogOut, Palette } from 'lucide-react'

import { type Theme, useTheme } from './theme/theme-provider'

export function AccountMenu() {
	const { theme, setTheme } = useTheme()

	const handleThemeChange = (theme: Theme) => {
		setTheme(theme)
	}

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

				<DropdownMenuSub>
					<DropdownMenuSubTrigger className="flex gap-2">
						<Palette className="size-4" />
						Tema
					</DropdownMenuSubTrigger>
					<DropdownMenuPortal>
						<DropdownMenuSubContent>
							<DropdownMenuRadioGroup
								value={theme}
								onValueChange={(value) => handleThemeChange(value as Theme)}
							>
								<DropdownMenuRadioItem value="light">
									Light
								</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="system">
									System
								</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuSubContent>
					</DropdownMenuPortal>
				</DropdownMenuSub>

				<DropdownMenuItem className="flex gap-2 text-destructive">
					<LogOut className="size-4" />
					Sair
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
