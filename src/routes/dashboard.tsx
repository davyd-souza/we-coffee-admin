import { createFileRoute } from '@tanstack/react-router'

const Dashboard = () => {
	return (
		<main>
			<h1>Dashboard</h1>
		</main>
	)
}

export const Route = createFileRoute('/dashboard')({
	component: Dashboard,
})
