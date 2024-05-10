import { http, HttpResponse } from 'msw'

import {
  GetDailyRevenueInPeriodRequest,
  GetDailyRevenueInPeriodResponse,
} from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  GetDailyRevenueInPeriodRequest,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', async () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 178 },
    { date: '01/01/2024', receipt: 56 },
    { date: '01/01/2024', receipt: 22 },
    { date: '01/01/2024', receipt: 525 },
    { date: '01/01/2024', receipt: 2212 },
    { date: '01/01/2024', receipt: 56 },
    { date: '01/01/2024', receipt: 22 },
  ])
})
