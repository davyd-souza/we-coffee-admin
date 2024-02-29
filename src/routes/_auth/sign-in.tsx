import { createFileRoute } from '@tanstack/react-router'

function SignIn() {
	return (
		<div>
			<h1>Sign In</h1>
		</div>
	)
}

export const Route = createFileRoute('/_auth/sign-in')({ component: SignIn })
