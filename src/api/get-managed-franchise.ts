import { api } from '@/lib/axios'

export type GetManagedFranchiseResponse = {
	id: string
	name: string
	createdAt: Date | null
	updatedAt: Date | null
	description: string | null
	managerId: string | null
}

export async function getManagedFranchise() {
	const response = await api.get<GetManagedFranchiseResponse>(
		// TODO: change to /managed-franchise later
		'/managed-restaurant',
	)

	return response.data
}
