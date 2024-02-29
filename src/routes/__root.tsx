import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export const Route = createRootRoute({
	component: () => (
		<HelmetProvider>
			<Helmet titleTemplate="%s | We Coffee" />
			<Outlet />
		</HelmetProvider>
	),
})
