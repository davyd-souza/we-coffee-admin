import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({ component: AuthLayout })

function AuthLayout() {
	return (
		<div>
			<p>Auth Layout</p>

			<Outlet />
		</div>
	)
}
