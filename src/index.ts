import { ApolloServer, gql, makeExecutableSchema } from 'apollo-server';
import { resolvers, schemas, Context } from './graphql';
import { PostSQLRepository } from './modules/posts';
import { CategorySQLRepository } from './modules/categories';
import { AuthorSQLRepository } from './modules/authors';
import { log } from './log';
import { Client } from 'pg';
import * as Postgrator from 'postgrator';
import * as dotenv from 'dotenv';
dotenv.config();

(async () => {
  const db = new Client();
  await db.connect();

  // Migrate database ⚡️
  const postgrator = new Postgrator({
    migrationDirectory: './migrations',
    driver: 'pg',
  });
  await postgrator.migrate();

  // Set-up GraphQL schema and resolvers 🔌
  const schema = makeExecutableSchema({
    typeDefs: schemas,
    resolvers,
  });

  const server = new ApolloServer({
    schema,
    context: (): Context => {
      return {
        repositories: {
          post: new PostSQLRepository(db),
          category: new CategorySQLRepository(db),
          author: new AuthorSQLRepository(db),
        },
      };
    },
  });

  // GraphQL server set 🚀
  server.listen().then(({ url }) => {
    log.info(`🚀  Server ready at ${url}`);
  });
})();
