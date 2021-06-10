// ref: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql-nextjs/pages/api/index.ts
import path from "path";
import { makeSchema } from "nexus";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";

import * as types from "../../graphql/schema";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), "graphql", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "graphql", "schema.graphql"),
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({ schema });

export default apolloServer.createHandler({ path: "/api/graphql" });
