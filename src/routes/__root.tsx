import { Outlet, createRootRoute } from '@tanstack/react-router'
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
})
