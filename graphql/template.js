import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import templateResolvers from './resolvers/template'
import dateResolver from './resolvers/scalar/date'

export default (sys, type) => {
  const typeDefs = importSchema(path.join(__dirname, 'schema', sys, `${type}.graphql`))
  const resolvers = templateResolvers(type, dateResolver)
  return makeExecutableSchema({ typeDefs, resolvers })
}