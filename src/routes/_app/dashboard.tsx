import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

function Dashboard() {
	return (
		<div>
			<Helmet title="Dashboard" />
			<h1>Dashboard</h1>
		</div>
	)
}

export const Route = createFileRoute('/_app/dashboard')({ component: Dashboard })
