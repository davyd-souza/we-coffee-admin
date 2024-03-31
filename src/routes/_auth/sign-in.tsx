import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Link, createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const signInForm = z.object({
	email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

function SignIn() {
	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignInForm>()

	// const handleSignIn = async (data: SignInForm) => {
	const handleSignIn = async () => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000))

			toast.success(
				'Foi encaminhado um link de autenticação para seu e-mail.',
				{
					action: {
						label: 'Reenviar',
						onClick: () => handleSignIn,
					},
				},
			)
		} catch {
			toast.error('E-mail não encontrado.')
		}
	}

	return (
		<>
			<Helmet title="Sign in" />

			<main className="col-span-1 grid content-center gap-6 p-20">
				<section>
					<h1 className="font-semibold text-lg tracking-tight md:text-2xl">
						Acessar o painel
					</h1>
					<p className="text-muted-foreground text-sm">
						Acompanhe suas vendas pelo painel do parceiro!
					</p>
				</section>

				<form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
					<div className="space-y-2">
						<Label htmlFor="email">Seu e-mail</Label>
						<Input id="email" type="email" {...register('email')} />
					</div>

					<Button disabled={isSubmitting} className="w-full">
						Acessar
					</Button>
				</form>

				<div className="mt-4 h-0.5 w-full bg-muted" />

				<Link
					to="/sign-up"
					className="rounded-md border border-border bg-muted p-4 hover:bg-muted/90"
				>
					<div className="flex items-center">
						<div className="flex-1 gap-2">
							<p>Deseja estabelecer uma franquia?</p>
							<p className="font-bold text-primary">
								Se inscreva gratuitamente
							</p>
						</div>

						<ChevronRight />
					</div>
				</Link>
			</main>
		</>
	)
}

export const Route = createFileRoute('/_auth/sign-in')({ component: SignIn })
