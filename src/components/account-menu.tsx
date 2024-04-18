import { useMutation, useQuery } from '@tanstack/react-query'
import { Link, useNavigate } from '@tanstack/react-router'
import { useManagedFranchise } from '@/hooks/useManagedFranchise'

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
import { signOut } from '@/api/sign-out'

export function AccountMenu() {
	const { theme, setTheme } = useTheme()
	const { data: managedFranchise, isLoading: isLoadingManagedFranchise } =
		useManagedFranchise()

	const navigate = useNavigate()

	const handleThemeChange = (theme: Theme) => {
		setTheme(theme)
	}

	const { data: profile, isLoading: isLoadingProfile } = useQuery({
		queryKey: ['me'],
		queryFn: getProfile,
	})

	const { mutateAsync: signOutFn, isPending: isSigningOut } = useMutation({
		mutationFn: signOut,
		onSuccess: () => navigate({ to: '/sign-in', replace: true }),
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

				<DropdownMenuItem asChild>
					<Button
						variant="ghost"
						onClick={() => signOutFn()}
						disabled={isSigningOut}
						className="hover:!text-destructive flex h-auto w-full justify-start gap-2 px-2 py-1.5 text-destructive text-sm focus-visible:ring-0"
					>
						<LogOut className="size-4" />
						Sair
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
