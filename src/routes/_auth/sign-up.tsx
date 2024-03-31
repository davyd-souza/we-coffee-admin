import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const signUpForm = z.object({
	locationName: z.string(),
	managerName: z.string(),
	email: z.string().email(),
	phone: z.string(),
})

type SignUpForm = z.infer<typeof signUpForm>

function SignUp() {
	const navigate = useNavigate({ from: '/sign-up' })

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<SignUpForm>()

	const handleSignUp = async () => {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000))

			toast.success('Franquia cadastrada com sucesso!', {
				action: {
					label: 'Login',
					onClick: () => navigate({ to: '/sign-in' }),
				},
			})
		} catch {
			toast.error('Erro ao cadastrar franquia.')
		}
	}

	return (
		<>
			<Helmet title="Cadastro" />

			<main className="col-span-1 grid content-center gap-6 p-20">
				<section>
					<h1 className="font-semibold text-ls tracking-tight md:text-2xl">
						Estabeleça uma nova franquia
					</h1>
					<p className="text-muted-foreground text-sm">
						Seja um parceito e comece suas vendas!
					</p>
				</section>

				<form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
					<div className="space-y-2">
						<Label htmlFor="locationName">Local do estabelecimento</Label>
						<Input
							id="locationName"
							type="text"
							{...register('locationName')}
						/>
					</div>

					<div className="space-y-2">
						<Label htmlFor="managerName">Seu nome</Label>
						<Input id="managerName" type="text" {...register('managerName')} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="email">Seu e-mail</Label>
						<Input id="email" type="email" {...register('email')} />
					</div>

					<div className="space-y-2">
						<Label htmlFor="phone">Seu telefone</Label>
						<Input id="phone" type="tel" {...register('phone')} />
					</div>

					<Button disabled={isSubmitting} className="w-full">
						Cadastrar
					</Button>

					<p className="px-6 text-center text-muted-foreground text-sm leading-relaxed">
						Ao continuar, você concorda com nossos{' '}
						<a href="#termos" className="underline underline-offset-2">
							termos de serviços
						</a>{' '}
						e{' '}
						<a href="#politicas" className="underline underline-offset-2">
							políticas de privacidade.
						</a>
					</p>
				</form>
			</main>
		</>
	)
}

export const Route = createFileRoute('/_auth/sign-up')({ component: SignUp })
