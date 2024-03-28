import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'sonner'

export const Route = createRootRoute({
	component: () => (
		<HelmetProvider>
			<Helmet titleTemplate="%s | We Coffee" />
      <Toaster richColors />
			<Outlet />
		</HelmetProvider>
	),
})
