import { Link, useRouteError } from 'react-router-dom'

export function PageError() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Whoops, controle interrompido...</h1>
      <p className="text-muted-foreground">
        Um erro foi encontrado na aplicação, abaixo você encontra mais detalhes
      </p>
      <pre>{error.message || JSON.stringify(error)}</pre>
      <p className="text-muted-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
