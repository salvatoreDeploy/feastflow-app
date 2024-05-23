import { http, HttpResponse } from 'msw'

import { UpdateProfileBody } from '../update-profile'

export const UpdateProfileMock = http.put<never, UpdateProfileBody>(
  '/profile',
  async ({ request }) => {
    const { name, description } = await request.json()

    if (name === 'Pizzaria') {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    if (description === 'Nova description') {
      return new HttpResponse(null, {
        status: 204,
      })
    }

    return new HttpResponse(null, { status: 400 })
  },
)
