import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({
    uri: "http://10.0.2.2:8080/graphql",
  }),
  cache: new InMemoryCache(),
});
