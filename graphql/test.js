import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

const typeDefs = importSchema(path.join(__dirname, '../schema/test.graphql'))

const resolvers = {
  Query: {
    hello: () => 'this is test',
    user: (_, { id }) => ({ id, name: 'test' }),
  },
  Mutation: {
    upHello: (_, { hello }) => hello,
    upUser: (_, { user }) => ({ id: 'a', ...user }),
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })