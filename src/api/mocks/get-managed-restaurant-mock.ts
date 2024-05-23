import { http, HttpResponse } from 'msw'

import { ManagedRestaurantResponse } from '../get-managed-restaurant'

export const getManagedRestaurantMock = http.get<
  never,
  never,
  ManagedRestaurantResponse
>('/managed-restaurant', () => {
  return HttpResponse.json({
    id: 'custom-user-id',
    managerId: 'custom-managed-id',
    name: 'Managed Test',
    description: 'Cistom description test',
    createdAt: new Date(),
    updatedAt: null,
  })
})
