# My Cat App 🐱

Bem-vindo ao **My Cat App**! Este é um projeto desenvolvido em [Next.js](https://nextjs.org/) que consome a [TheCatAPI](https://thecatapi.com/) para exibir imagens e informações sobre gatinhos.

## 📋 Sobre o Projeto

O objetivo deste aplicativo é demonstrar o uso de APIs externas em uma aplicação React moderna, utilizando Server Components e Server Actions do Next.js (App Router).

### Funcionalidades Planejadas
- **Galeria de Gatos**: Visualização de imagens aleatórias de gatos.
- **Busca por Raça**: Filtrar gatos por raça específica.
- **Detalhes**: Ver informações detalhadas sobre cada gato.

## 🚀 Tecnologias Utilizadas

- **Framework**: Next.js 15
- **Linguagem**: TypeScript
- **Estilização**: CSS Modules / Global CSS
- **API**: TheCatAPI

## 📦 Como Rodar o Projeto

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/my-cat-app.git
```

2. Instale as dependências:
```bash
npm install
# ou
yarn
```

3. Configure a variável de ambiente (opcional para requests básicos, mas recomendado):
Crie um arquivo `.env.local` na raiz do projeto e adicione sua chave da API:
```env
NEXT_PUBLIC_THE_CAT_API_KEY=sua_chave_aqui
```

4. Rode o servidor de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.
