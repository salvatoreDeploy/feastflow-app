import { http, HttpResponse } from 'msw'

import { GetMonthOrdersAmountResponse } from '../get-month-orders-amount'

export const getMonthOrdersAmount = http.get<
  never,
  never,
  GetMonthOrdersAmountResponse
>('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    previousAmount: 5,
    differenceFromLastMonth: -10,
  })
})
