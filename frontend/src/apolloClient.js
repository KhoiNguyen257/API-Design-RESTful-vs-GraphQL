import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const linkKetNoi = new HttpLink({
  uri: 'http://localhost:5000/graphql'
});

const client = new ApolloClient({
  link: linkKetNoi, 
  cache: new InMemoryCache()
});

export default client;