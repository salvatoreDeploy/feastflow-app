import { api } from '@/lib/axios'

export interface GetMonthRevenueResponse {
  receipt: number
  previousReceipt: number
  differenceFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenueResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
