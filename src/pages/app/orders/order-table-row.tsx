/* eslint-disable @typescript-eslint/no-unused-vars */
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { ArrowRight, Search, X } from 'lucide-react'

import { OrderStatus } from '@/components/order-status'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { TableCell, TableRow } from '@/components/ui/table'

import { OrderDeatails } from './order-details'

export interface TableOrderRowProps {
  order: {
    status: 'pending' | 'processing' | 'delivering' | 'delivered' | 'canceled'
    customerName: string
    orderId: string
    createdAt: string
    total: number
  }
}

export function TableOrderRow({ order }: TableOrderRowProps) {
  return (
    <TableRow>
      <TableCell>
        <Dialog>
          <DialogTrigger>
            <Button variant={'outline'} size={'xs'}>
              <Search className="size-3" />
              <span className="sr-only">Detalhes do pedido</span>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <OrderDeatails />
          </DialogContent>
        </Dialog>
      </TableCell>

      <TableCell className="font-mono text-xs font-medium">
        {order.orderId}
      </TableCell>
      <TableCell className="text-muted-foreground">
        {formatDistanceToNow(order.createdAt, {
          locale: ptBR,
          addSuffix: true,
        })}
      </TableCell>
      <TableCell>
        <OrderStatus status={order.status} />
      </TableCell>
      <TableCell className="font-medium">{order.customerName}</TableCell>
      <TableCell className="font-medium">
        {order.total.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </TableCell>
      <TableCell>
        <Button variant={'outline'} size={'xs'}>
          <ArrowRight className="mr-3 size-3" />
          Proximo
        </Button>
      </TableCell>
      <TableCell>
        <Button variant={'ghost'} size={'xs'}>
          <X className="mr-3 size-3" />
          Cancelar
        </Button>
      </TableCell>
    </TableRow>
  )
}
