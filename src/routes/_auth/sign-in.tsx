import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

function SignIn() {
	return (
		<>
			<Helmet title="Sign in" />

			<main className="grid place-content-center gap-6 p-8">
				<section>
					<h1 className="text-lg md:text-2xl font-semibold tracking-tight">
						Acessar o painel
					</h1>
					<p className="text-sm text-muted-foreground">
						Acompanhe suas vendas pelo painel do parceiro!
					</p>
				</section>

				<form className="space-y-4">
					<div className="space-y-2">
						<Label htmlFor="email">Seu e-mail</Label>
						<Input id="email" type="email" />
					</div>

					<Button className="w-full">Acessar</Button>
				</form>
			</main>
		</>
	)
}

export const Route = createFileRoute('/_auth/sign-in')({ component: SignIn })
