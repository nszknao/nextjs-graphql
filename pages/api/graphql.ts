// ref: https://github.com/prisma/prisma-examples/blob/latest/typescript/graphql-nextjs/pages/api/index.ts
import path from "path";
import { makeSchema } from "nexus";
import { PrismaClient } from "@prisma/client";
import { ApolloServer } from "apollo-server-micro";

import * as types from "../../graphql/schema";
import { Context } from "../../graphql/context";

export const schema = makeSchema({
  types,
  outputs: {
    typegen: path.join(process.cwd(), "graphql", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "graphql", "schema.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "graphql", "context.ts"),
    export: "Context",
  },
  // ref: https://github.com/graphql-nexus/nexus/blob/main/examples/with-prisma/api.ts
  sourceTypes: {
    modules: [{ module: ".prisma/client", alias: "PrismaClient" }],
  },
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({ schema, context: () => ({ prisma }) });

export default apolloServer.createHandler({ path: "/api/graphql" });
