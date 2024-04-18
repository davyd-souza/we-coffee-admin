import {
	Link,
	Outlet,
	createFileRoute,
	useNavigate,
	useRouterState,
} from '@tanstack/react-router'

function Settings() {
	const router = useRouterState()
	const navigate = useNavigate({ from: 'settings' })

	const { pathname } = router.location

	if (pathname === '/settings' || pathname === '/settings/') {
		navigate({ to: '/settings/franchise' })
	}

	return (
		<section className="grid grid-cols-9 gap-20">
			<div className="col-span-2 space-y-4">
				<h1 className="font-bold text-xl tracking-tight">Configurações</h1>

				<nav aria-label="Settings Options">
					<ul className="flex flex-col gap-2">
						<li>
							<Link
								className="block select-none rounded-sm p-2 outline-none ring-primary aria-[disabled]:cursor-not-allowed data-[status=active]:bg-muted aria-[disabled]:text-muted-foreground focus-visible:ring"
								disabled
								to="#"
							>
								Geral
							</Link>
						</li>
						<li>
							<Link
								className="block select-none rounded-sm p-2 outline-none ring-primary aria-[disabled]:cursor-not-allowed data-[status=active]:bg-muted aria-[disabled]:text-muted-foreground focus-visible:ring"
								to="/settings/franchise"
							>
								Perfil da Franquia
							</Link>
						</li>
						<li>
							<Link
								className="block select-none rounded-sm p-2 outline-none ring-primary aria-[disabled]:cursor-not-allowed data-[status=active]:bg-muted aria-[disabled]:text-muted-foreground focus-visible:ring"
								disabled
								to="#"
							>
								Cardápio
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<main className="col-span-6">
				<Outlet />
			</main>
		</section>
	)
}

export const Route = createFileRoute('/_app/settings')({ component: Settings })
