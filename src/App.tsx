import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/theme/theme-provider'
import { router } from './routes'

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="feastflow-theme">
        <Helmet titleTemplate="%s | feastflow" />
        <RouterProvider router={router}></RouterProvider>
        <Toaster richColors />
      </ThemeProvider>
    </HelmetProvider>
  )
}
