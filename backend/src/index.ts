import { ApolloServer } from 'apollo-server';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
import { context } from './context';

import { schema } from './schema';
export const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground]
});

const PORT = process.env.PORT || 5500;

server.listen(PORT).then(({ url }) => {
  console.log(`🚀 Server running on ${url}`);
});
