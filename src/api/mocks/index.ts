import { env } from '@/env'
import { setupWorker } from 'msw/browser'

import { signInMock } from './sign-in-mock'
import { registerFranchiseMock } from './register-franchise-mock'

export const worker = setupWorker(signInMock, registerFranchiseMock)

export async function enableMSW() {
	if (env.MODE !== 'test') {
		return
	}

	await worker.start()
}
