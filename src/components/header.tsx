import { Coffee, Home } from 'lucide-react'
import { Separator } from './ui/separator'
import { Link } from '@tanstack/react-router'
import { ThemeToggle } from './theme/theme-toggle'

export function Header() {
	return (
		<header className="border-b">
			<div className="flex items-center gap-6 px-6 py-4">
				<img className="size-10" src="/we-coffee.svg" alt="Logo" />

				<Separator orientation="vertical" className="h-6" />

				<nav className="flex items-center gap-4 lg:gap-6">
					<Link
						to="/"
						className="flex items-center gap-2 font-medium text-muted-foreground text-sm data-[status=active]:text-foreground hover:text-foreground"
					>
						<Home className="size-5" />
						Home
					</Link>
					<Link
						to="/orders"
						className="flex items-center gap-2 font-medium text-muted-foreground text-sm data-[status=active]:text-foreground hover:text-foreground"
					>
						<Coffee className="size-5" />
						Pedidos
					</Link>
				</nav>

				<div className="ml-auto flex items-center gap-2">
					<ThemeToggle />
				</div>
			</div>
		</header>
	)
}
