import { HttpResponse, http } from 'msw'

import type { UpdateFranchiseBody } from '../update-franchise'

export const updateFranchiseMock = http.put<never, UpdateFranchiseBody>(
	'/profile',
	async ({ request }) => {
		const { name } = await request.json()

		if (name === 'Interlake Garden') {
			return new HttpResponse(null, { status: 204 })
		}

		return new HttpResponse(null, { status: 400 })
	},
)
