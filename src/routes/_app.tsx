import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
	component: AppLayout,
})

export function AppLayout() {
	return (
		<div>
			<p>App Layout</p>

			<Outlet />
		</div>
	)
}
