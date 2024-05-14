import { HttpResponse, http } from "msw";
import type { RegisterFranchiseBody } from "../register-franchise";

// TODO: change to franchise
export const registerFranchiseMock = http.post<never, RegisterFranchiseBody>('/restaurants', async ({ request }) => {
  const { restaurantName } = await request.json()

  if (restaurantName === 'Jardim Interlagos') {
    return new HttpResponse(null, {
      status: 201
    })
  }

  return new HttpResponse(null, {
    status: 400
  })
})