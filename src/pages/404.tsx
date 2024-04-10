import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Página não encontrada 404</h1>
      <p className="text-muted-foreground">
        Voltar para o{' '}
        <Link to="/" className="text-sky-600">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
