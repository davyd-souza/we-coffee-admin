import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { toast } from 'sonner'

const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

function SignIn() {
	const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>()

  const handleSignIn = async (data: SignInForm) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      toast.success('Foi encaminhado um link de autenticação para seu e-mail.', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSignIn
        }
      })
    } catch {
      toast.error('E-mail não encontrado.')
    }
  }

  return (
		<>
			<Helmet title="Sign in" />

			<main className="grid place-content-center gap-6 p-8">
				<section>
					<h1 className='font-semibold text-lg tracking-tight md:text-2xl'>
						Acessar o painel
					</h1>
					<p className='text-muted-foreground text-sm'>
						Acompanhe suas vendas pelo painel do parceiro!
					</p>
				</section>

				<form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
					<div className="space-y-2">
						<Label htmlFor="email">Seu e-mail</Label>
						<Input id="email" type="email" {...register('email')} />
					</div>

					<Button disabled={isSubmitting} className="w-full">Acessar</Button>
				</form>
			</main>
		</>
	)
}

export const Route = createFileRoute('/_auth/sign-in')({ component: SignIn })
