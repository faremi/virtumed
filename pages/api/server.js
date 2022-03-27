import { split, HttpLink, ApolloClient, InMemoryCache } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { createAbsintheSocketLink } from "@absinthe/socket-apollo-link";
import * as AbsintheSocket from "@absinthe/socket";
const httpLink = new HttpLink({
  uri: "http://localhost:4000/api/server",
});

const socketLink =
  typeof window === "undefined" &&
  createAbsintheSocketLink(AbsintheSocket.create(new PhoenixSocket(WS_URI)));
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/api/server",
    options: {
      reconnect: true,
      lazy: true,
    },
  })
);

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// ...code from the above example goes here...

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

const COMMENTS_SUBSCRIPTION = gql`
  subscription OnCommentAdded($postID: ID!) {
    commentAdded(postID: $postID) {
      id
      content
    }
  }
`;
