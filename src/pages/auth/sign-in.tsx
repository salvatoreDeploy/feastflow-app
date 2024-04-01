import { Label } from '@radix-ui/react-label'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export function SignIn() {
  return (
    <>
      <Helmet title="Sign-in" />
      <div className="p-8">
        <div className="w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar Painel de Controle
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe e tenha controle da suas vendas por aqui...
            </p>
          </div>
          <form action="" method="post" className="flex flex-col space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail..."
              />
            </div>

            <Button type="button">Acessar painel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
