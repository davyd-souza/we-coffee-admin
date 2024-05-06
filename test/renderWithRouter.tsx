import {
	Outlet,
	type Router,
	RouterProvider,
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter,
} from '@tanstack/react-router'
import { render, type RenderResult } from '@testing-library/react'

import type queries from '.pnpm/@testing-library+dom@10.1.0/node_modules/@testing-library/dom/types/queries'

type RenderWithRouterProps = {
	// biome-ignore lint/correctness/noUndeclaredVariables: JSX element is global
	element: JSX.Element
	path?: string
}

type RenderWithRouterResponse = {
	wrapper: RenderResult<typeof queries, HTMLElement, HTMLElement>
	router: Router
}

export async function renderWithRouterProps({
	element,
	path = '/',
}: RenderWithRouterProps): Promise<RenderWithRouterResponse> {
	const rootRoute = createRootRoute({ component: () => <Outlet /> })

	const componentRoute = createRoute({
		path,
		getParentRoute: () => rootRoute,
		component: () => element,
	})

	const router = createRouter({
		history: createMemoryHistory({
			initialEntries: [path],
		}),
		routeTree: rootRoute.addChildren([componentRoute]),
	})

	await router.load()

	const wrapper = render(<RouterProvider router={router} />)

	return { wrapper, router }
}
