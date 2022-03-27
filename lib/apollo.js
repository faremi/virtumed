import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "/api/graphql", //process.env.LOCALHOST,
  cache: new InMemoryCache(),
});

export default apolloClient;
