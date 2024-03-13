import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({ component: AuthLayout })

function AuthLayout() {
	return (
		<div className="min-h-screen md:grid grid-cols-2">
			<section className="hidden h-full bg-muted p-10 text-muted-foreground md:flex flex-col justify-between">
				<header>we coffee</header>

				<footer>
					Painel do parceiro &copy; we coffee - {new Date().getFullYear()}
				</footer>
			</section>

			<Outlet />
		</div>
	)
}
