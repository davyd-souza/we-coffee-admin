import { HttpResponse, http } from 'msw'

import type { GetManagedFranchiseResponse } from '../get-managed-franchise'

export const getManagedFranchiseMock = http.get<
	never,
	never,
	GetManagedFranchiseResponse
>('/managed-restaurant', () => {
	return HttpResponse.json({
		createdAt: new Date('2024-05-19'),
		description: 'This is the description',
		id: 'mock-franchise-id',
		managerId: 'mock-manager-id',
		name: 'Jardim Interlagos',
		updatedAt: null,
	})
})
