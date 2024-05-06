import { api } from '@/lib/axios'

export interface GetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsResponse {
  id: string
  status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
  createdAt: Date
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  ordersItems: {
    id: string
    priceInInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)

  return response.data
}
