import { useQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

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
import { Skeleton } from '@/components/ui/skeleton'
import { ChevronDown, Settings, LogOut, Palette } from 'lucide-react'
import { type Theme, useTheme } from './theme/theme-provider'

import { getProfile } from '@/api/get-profile'
import { useManagedFranchise } from '@/hooks/useManagedFranchise'

export function AccountMenu() {
	const { theme, setTheme } = useTheme()
	const { data: managedFranchise, isLoading: isLoadingManagedFranchise } =
		useManagedFranchise()

	const handleThemeChange = (theme: Theme) => {
		setTheme(theme)
	}

	const { data: profile, isLoading: isLoadingProfile } = useQuery({
		queryKey: ['me'],
		queryFn: getProfile,
	})

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button
					variant="outline"
					className="flex select-none items-center gap-2"
				>
					{isLoadingManagedFranchise ? (
						<Skeleton className="h-4 w-28" />
					) : (
						managedFranchise?.name
					)}
					<ChevronDown className="size-4" />
				</Button>
			</DropdownMenuTrigger>

			<DropdownMenuContent className="min-w-52" align="end">
				<DropdownMenuLabel className="flex flex-col">
					{isLoadingProfile ? (
						<div className="space-y-1.5">
							<Skeleton className="h-4 w-32" />
							<Skeleton className="h-3 w-24" />
						</div>
					) : (
						<>
							<span>{profile?.name}</span>
							<span className="font-normal text-muted-foreground text-xs">
								{profile?.email}
							</span>
						</>
					)}
				</DropdownMenuLabel>

				<DropdownMenuSeparator />

				<DropdownMenuItem className="flex gap-2" asChild>
					<Link to="/settings/franchise">
						<Settings className="size-4" />
						Configurações
					</Link>
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
