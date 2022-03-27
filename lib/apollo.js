import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.LOCALHOST,
  cache: new InMemoryCache(),
});

export default apolloClient;
