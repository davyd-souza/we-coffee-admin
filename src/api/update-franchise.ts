import { api } from '@/lib/axios'

export type UpdateFranchiseBody = {
	name: string
	description: string | null
}

export async function updateFranchise({
	description,
	name,
}: UpdateFranchiseBody) {
	await api.put('/profile', { description, name })
}
