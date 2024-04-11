import { api } from '@/lib/axios'

export type RegisterFranchiseBody = {
	restaurantName: string
	managerName: string
	email: string
	phone: string
}

// TODO: change to franchise after Vinicius creates backend for this app
export async function registerFranchise({
	email,
	managerName,
	phone,
	restaurantName,
}: RegisterFranchiseBody) {
	await api.post('/restaurants', {
		email,
		managerName,
		phone,
		restaurantName,
	})
}
