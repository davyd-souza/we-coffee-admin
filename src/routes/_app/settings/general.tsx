import { createFileRoute } from '@tanstack/react-router'

function General() {
	return (
		<div>
			<p>General</p>
		</div>
	)
}

export const Route = createFileRoute('/_app/settings/general')({
	component: General,
})
