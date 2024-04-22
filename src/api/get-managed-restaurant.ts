import { api } from '@/lib/axios'

export interface ManagedRestaurantResponse {
  name: string
  id: string
  createdAt: Date
  updatedAt: Date
  description: string | null | undefined
  managerId: string | null
}

export async function getManagedRestaurant() {
  const response = await api.get<ManagedRestaurantResponse>(
    '/managed-restaurant',
  )

  return response.data
}
