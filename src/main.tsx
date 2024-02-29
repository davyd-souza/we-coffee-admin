import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import './styles/globals.css'

import { routeTree } from './routeTree.gen'
import { RouterProvider, createRouter } from '@tanstack/react-router'

const router = createRouter({ routeTree })

declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)

	root.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	)
}
