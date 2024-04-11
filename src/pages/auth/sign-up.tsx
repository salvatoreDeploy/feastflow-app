import { Label } from '@radix-ui/react-label'
import { useMutation } from '@tanstack/react-query'
import { Loader } from 'lucide-react'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { registerRestaurant } from '@/api/register-restaurant'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const signupFormSchema = z.object({
  restaurantName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signupFormSchema>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  const { mutateAsync: registerRestaurantFn } = useMutation({
    mutationFn: registerRestaurant,
  })

  async function handleSingIn(data: SignUpForm) {
    try {
      await registerRestaurantFn({
        restaurantName: data.restaurantName,
        managerName: data.managerName,
        email: data.email,
        phone: data.phone,
      })

      toast.success('Restaurante casdastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate(`/sign-in?email=${data.email}`),
        },
      })
    } catch (error) {
      toast.error('Erro ao cadastrar restaurante')
    }
  }

  return (
    <>
      <Helmet title="Cadastro" />
      <div className="p-8">
        <Button variant="outline" asChild>
          <Link to="/sign-in" className="absolute right-8 top-8">
            Efetuar Login
          </Link>
        </Button>

        <div className="w-[320px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center ">
            <h1 className="text-2xl font-semibold tracking-tighter">
              Criar conta gratuita
            </h1>
            <p className="pb-3 text-sm text-muted-foreground">
              Seja nosso parceiro, e venha vender e controlar com a gente...
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSingIn)}
            className="flex flex-col space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do Estabelecimento:</Label>
              <Input
                id="restaurantName"
                type="text"
                placeholder="Digite nome do seu restaurante"
                {...register('restaurantName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Nome:</Label>
              <Input
                id="managerName"
                type="text"
                placeholder="Digite seu nome..."
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Telefone:</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Digite seu telefone..."
                {...register('phone')}
              />
            </div>

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
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a className="underline underline-offset-4" href="#">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a className="underline underline-offset-4" href="#">
                politicas de privacidade
              </a>
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
