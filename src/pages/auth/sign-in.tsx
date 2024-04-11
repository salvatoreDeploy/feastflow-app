import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useSearchParams } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { signIn } from '@/api/sign-in'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signinFormSchema = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signinFormSchema>

export function SignIn() {
  const [searchParams] = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>({
    defaultValues: {
      email: searchParams.get('email') ?? '',
    },
  })

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  })

  async function handleSingIn(data: SignInForm) {
    try {
      await authenticate({ email: data.email })

      toast.success('Enviamos um link de autenticação para seu e-mail', {
        action: {
          label: 'Reenviar',
          onClick: () => handleSingIn(data),
        },
      })
    } catch (error) {
      toast.error('Credenciais invalidas')
    }
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
