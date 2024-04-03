import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({ component: AuthLayout })

function AuthLayout() {
	return (
		<div className="min-h-screen grid-cols-3 md:grid">
			<section className="col-span-2 hidden h-full flex-col justify-between bg-muted p-10 text-muted-foreground md:flex">
				<header className="flex items-center gap-2">
					<img className="size-10" src="/we-coffee.svg" alt="Logo" />
				</header>

				<footer>
					Painel do parceiro &copy; we coffee - {new Date().getFullYear()}
				</footer>
			</section>

			<Outlet />
		</div>
	)
}
