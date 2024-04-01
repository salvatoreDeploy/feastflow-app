import { Label } from '@radix-ui/react-label'
import { Loader } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signinFormSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signinFormSchema>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSingIn(data: SignInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Restaurante casdastrado com sucesso!', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSingIn(data),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante')
    }

    console.log(data)

    await new Promise((resolve) => setTimeout(resolve, 5000))

    toast.success('Enviamos um link de autenticação para seu e-mail', {
      action: {
        label: 'Reenviar',
        onClick: () => handleSingIn(data),
      },
    })
  }

  return (
    <>
      <Helmet title="Sign-in" />
      <div className="p-8">
        <Button variant="outline" asChild>
          <Link to="/sign-up" className="absolute right-8 top-8">
            Novo estabelecimento
          </Link>
        </Button>

        <div className="w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Acessar Painel de Controle
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe e tenha controle da suas vendas por aqui...
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSingIn)}
            className="flex flex-col space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail:</Label>
              <Input
                id="email"
                type="email"
                placeholder="Digite seu e-mail..."
                {...register('email')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit">
              {isSubmitting && (
                <svg
                  className="... mr-3 h-5 w-5 animate-spin "
                  viewBox="0 0 24 24"
                >
                  <Loader className="h-5 w-5" />
                </svg>
              )}
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
