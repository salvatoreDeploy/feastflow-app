import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'John Doe',
      email: 'johndoe@email.com',
      phone: '159991234',
    },
    ordersItems: [
      {
        id: 'order-item-1',
        priceInInCents: 1000,
        product: { name: 'Pizza Peperoni' },
        quantity: 1,
      },
      {
        id: 'order-item-2',
        priceInInCents: 2000,
        product: { name: 'Pizza Marguerita' },
        quantity: 2,
      },
    ],
    status: 'pending',
    createdAt: new Date(),
    totalInCents: 5000,
  })
})
