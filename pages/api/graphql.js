// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { ApolloServer } from "apollo-server-micro";
import { schema } from "../../graphql/schema";
import { createContext } from "../../graphql/context";
import Cors from "micro-cors";
const apolloServer = new ApolloServer({
  schema,
  // resolvers,
  context: createContext,
});

const startServer = apolloServer.start();
const cors = Cors();
export default cors(async function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }
  await startServer;

  await apolloServer.createHandler({
    path: "/api/graphql",
  })(req, res);
});

export const config = {
  api: {
    bodyParser: false,
  },
};
