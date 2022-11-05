import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import { schema } from './schema';
export const server = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
});

const PORT = 5500;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server running on ${url}`);
});
