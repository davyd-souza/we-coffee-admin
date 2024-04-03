import { createFileRoute } from '@tanstack/react-router'

function Orders() {
	return (
		<div>
			<h1>Orders</h1>
		</div>
	)
}

export const Route = createFileRoute('/_app/orders')({ component: Orders })
