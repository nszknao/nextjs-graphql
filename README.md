# nextjs-graphql
Next.js(TypeScript) + GraphQL(Apollo,Nexus) + MySQL(Prisma)

## Setup
```
# Next.js
npx create-next-app

# TypeScript
yarn add -D typescript @types/node @types/react @types/react-dom

# コンポーネントを.tsxに更新
# tsconfig.jsonを適当に編集

# Prisma
yarn add -D @prisma/cli
npx prisma init
npx prisma introspect
yarn add @prisma/client
npx prisma generate

# Apollo
yarn add @apollo/client graphql
```

## Run
```
# app
yarn dev
```

---
### 調査した情報
- `@apollo/react-hooks`系のリポジトリはDeprecateで、`@apollo/client`に統合された
  - https://github.com/apollographql/react-apollo

*Reference*
- Next.jsのセットアップ
  - https://nextjs.org/docs/getting-started
- Prismaのセットアップ
  - https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch-sql-typescript-postgres
- Next.js + Apolloのサンプル
  - https://github.com/vercel/next.js/tree/master/examples/with-apollo
- Next.js + Apollo + Prismaのサンプル
  - https://github.com/prisma/prisma-examples/tree/latest/typescript/graphql-nextjs
- Next.js + Apolloはいいぞ
  - https://www.apollographql.com/blog/whats-next-js-for-apollo-e4dfe835d070/
