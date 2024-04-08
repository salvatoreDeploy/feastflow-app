import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export function OrderDeatails() {
  return (
    <DialogDescription>
      <DialogHeader>
        <DialogTitle>Pedido sja907s89d7sa89</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>
      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="size-3 rounded-full bg-slate-500"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Henrique Araujo
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (15)9 9999-9999
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                email@email.com.br
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">há 3 minutos</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Pizza Peperoni</TableCell>
              <TableHead className="text-right">2</TableHead>
              <TableHead className="text-right">R$ 69,90</TableHead>
              <TableHead className="text-right">R$ 139,80</TableHead>
            </TableRow>

            <TableRow>
              <TableCell>Pizza de Mussarela</TableCell>
              <TableHead className="text-right">2</TableHead>
              <TableHead className="text-right">R$ 59,90</TableHead>
              <TableHead className="text-right">R$ 119,80</TableHead>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableCell colSpan={3}>Total do Pedido</TableCell>
            <TableCell className="text-right font-medium">259,60</TableCell>
          </TableFooter>
        </Table>
      </div>
    </DialogDescription>
  )
}
