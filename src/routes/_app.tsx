import { Header } from '@/components/header'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app')({
	component: AppLayout,
})

export function AppLayout() {
	return (
		<div className="grid grid-rows-app">
			<Header />

			<div className="px-6 py-8">
				<Outlet />
			</div>
		</div>
	)
}
