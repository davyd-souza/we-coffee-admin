import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

function Dashboard() {
	return (
		<>
			<Helmet title="Home" />
			<h1>Dashboard</h1>
		</>
	)
}

export const Route = createFileRoute('/_app/')({ component: Dashboard })
