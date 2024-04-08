import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/theme-provider'

export const Route = createRootRoute({
	component: () => (
		<HelmetProvider>
			<ThemeProvider storageKey="wecoffee-theme">
				<Helmet titleTemplate="%s | We Coffee" />
				<Toaster richColors />
				<Outlet />
			</ThemeProvider>
		</HelmetProvider>
	),
	notFoundComponent: () => (
		<ThemeProvider storageKey="wecoffee-theme">
			<main className="grid h-screen place-content-center gap-2 text-center">
				<h1 className="font-bold text-4xl">Página não encontrada</h1>
				<p>
					Voltar para o{' '}
					<Link className="text-primary" to="/">
						Dashboard
					</Link>
				</p>
			</main>
		</ThemeProvider>
	),
})
