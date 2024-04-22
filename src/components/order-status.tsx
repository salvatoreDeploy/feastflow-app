type OrderStatus =
  | 'pending'
  | 'processing'
  | 'delivering'
  | 'delivered'
  | 'canceled'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Preparo',
  delivered: 'Entrgue',
  delivering: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <span className="size-2 rounded-full bg-slate-400"></span>
      )}

      {status === 'canceled' && (
        <span className="size-2 rounded-full bg-rose-500"></span>
      )}

      {status === 'delivered' && (
        <span className="bg-emerald-500-500 size-2 rounded-full"></span>
      )}

      {['processing', 'delivering'].includes(status) && (
        <span className="bg-amber-500-400 size-2 rounded-full"></span>
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
