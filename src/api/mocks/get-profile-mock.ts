import { HttpResponse, http } from 'msw'

import type { GetProfileResponse } from '../get-profile'

export const getProfileMock = http.get<never, never, GetProfileResponse>(
	'/me',
	() => {
		return HttpResponse.json({
			createdAt: new Date('2024-05-19'),
			email: 'johndoe@mail.com',
			id: 'mock-user-id',
			name: 'John Doe',
			phone: '11111111111',
			role: 'manager',
			updatedAt: null,
		})
	},
)
