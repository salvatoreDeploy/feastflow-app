# Projeto: FeastFlow

## Tecnologias: Vite(React), Tailwind

### Bibliotecas:

- shadcn/ui
- tailwindcss
- eslint @rocketseat/eslint-config -D
- prettier-plugin-tailwindcss
- eslint-plugin-simple-import-sort
- react-helmet-async
- react hook-form
- zod
- @hookform-resolvers
- rechart
- axios
- @tanstack/react-query

### Lógicas e Tópicos:

### Conceitos:

- Ao realizar uma conexão entre Client(Front-end) e uma Api ou back-end, onde sera necessário o compartilhamento de Cookies do front com back,
  usando segurança de HttpOnly devemos na configuração da lib que esta fazendo a requisição pro back, adicionar uma propriedade como informação sendo ela
  'withCredentials' como 'true' assim sera enviado automaticamente os Cookies pro back neste caso servindo para segurança de autenticação e determinado qual usuário pelo token do JWT do back-end

- React State (Local State(useState), HTTP State(Dados HTTP), Global State(Zustand, Redux, Jotai))

### Deploy:
