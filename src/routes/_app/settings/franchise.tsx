import { createFileRoute } from '@tanstack/react-router'
import { Helmet } from 'react-helmet-async'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useManagedFranchise } from '@/hooks/useManagedFranchise'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

import { updateFranchise } from '@/api/update-franchise'
import type { GetManagedFranchiseResponse } from '@/api/get-managed-franchise'

const franchiseProfileSchema = z.object({
	name: z.string().min(1),
	description: z.string(),
})

type FranchiseProfileData = z.infer<typeof franchiseProfileSchema>

function Profile() {
	const queryClient = useQueryClient()
	const { data: managedFranchise } = useManagedFranchise()

	const {
		register,
		handleSubmit,
		reset,
		formState: { isSubmitting, isDirty },
	} = useForm<FranchiseProfileData>({
		resolver: zodResolver(franchiseProfileSchema),
		values: {
			description: managedFranchise?.description ?? '',
			name: managedFranchise?.name ?? '',
		},
	})

	const { mutateAsync: updateFranchiseFn } = useMutation({
		mutationFn: updateFranchise,
		onSuccess(_, variables) {
			const cached = queryClient.getQueryData<GetManagedFranchiseResponse>([
				'managed-franchise',
			])

			if (cached) {
				queryClient.setQueryData(['managed-franchise'], {
					...cached,
					description: variables.description,
					name: variables.name,
				})
			}
		},
	})

	async function handleUpdateFranchise(data: FranchiseProfileData) {
		try {
			await updateFranchiseFn({
				description: data.description,
				name: data.name,
			})

			toast.success('Franquia atualizada com sucesso!')
		} catch {
			toast.error('Não foi possível atualizar a franquia!')
		}
	}

	const areButtonsDisabled = isSubmitting || !isDirty

	return (
		<>
			<Helmet title="Perfil Franquia" />

			<main className="space-y-4">
				<h2 className="font-bold text-xl tracking-tight">Perfil da Franquia</h2>

				<form
					className="space-y-5"
					id="update-franchise"
					onSubmit={handleSubmit(handleUpdateFranchise)}
				>
					<div className="grid grid-cols-9">
						<label htmlFor="name" className="col-span-3 flex flex-col gap-1">
							Nome
							<p className="text-muted-foreground text-xs">
								Informação visível ao cliente.
							</p>
						</label>

						<Input
							type="text"
							id="name"
							className="col-span-5"
							{...register('name')}
						/>
					</div>

					<Separator orientation="horizontal" />

					<div className="grid grid-cols-9">
						<label htmlFor="description" className="col-span-3">
							Descrição
							<p className="text-muted-foreground text-xs">
								Informação visível ao cliente.
							</p>
						</label>

						<Textarea
							id="description"
							className="col-span-5 resize-y"
							{...register('description')}
						/>
					</div>
				</form>

				<Separator />

				<div className="flex justify-end gap-2">
					<Button
						variant="ghost"
						disabled={areButtonsDisabled}
						onClick={() => reset()}
					>
						Cancelar
					</Button>

					<Button
						type="submit"
						form="update-franchise"
						disabled={areButtonsDisabled}
					>
						Salvar
					</Button>
				</div>
			</main>
		</>
	)
}

export const Route = createFileRoute('/_app/settings/franchise')({
	component: Profile,
})
