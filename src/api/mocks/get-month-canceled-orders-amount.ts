import { http, HttpResponse } from 'msw'

import { GetMonthCanceledOrdersAmountResponse } from '../get-month-canceled-orders-amount'

export const getMonthCanceledOrdersAmount = http.get<
  never,
  never,
  GetMonthCanceledOrdersAmountResponse
>('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 155,
    differenceFromLastMonth: 10,
  })
})
