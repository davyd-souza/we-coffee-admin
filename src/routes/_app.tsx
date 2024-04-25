import { useEffect } from 'react'
import { isAxiosError } from 'axios'
import { Outlet, createFileRoute, useNavigate } from '@tanstack/react-router'

import { Header } from '@/components/header'

import { api } from '@/lib/axios'

export const Route = createFileRoute('/_app')({
	component: AppLayout,
})

export function AppLayout() {
	const navigate = useNavigate({ from: '/' })

	useEffect(() => {
		const interceptorId = api.interceptors.response.use(
			(response) => response,
			(error) => {
				if (isAxiosError(error)) {
					const status = error.response?.status
					const code = error.response?.data.code

					if (status === 401 && code === 'UNAUTHORIZED') {
						navigate({ to: '/sign-in', replace: true })
					}
				}
			},
		)

		return () => {
			api.interceptors.response.eject(interceptorId)
		}
	}, [navigate])

	return (
		<div className="grid grid-rows-app">
			<Header />

			<div className="space-y-4 px-6 py-8">
				<Outlet />
			</div>
		</div>
	)
}
