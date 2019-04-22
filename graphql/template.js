import { makeExecutableSchema } from 'graphql-tools'
import templateTypeDefs from './schema/template'
import templateResolvers from './resolvers/template'
import dateResolver from './resolvers/scalar/date'

export default (sys, type, {typeDefsSupp = {}, resolversSupp = {}}) => {
  const typeDefs = templateTypeDefs(sys, type, typeDefsSupp)
  const resolvers = templateResolvers(type, resolversSupp)
  return makeExecutableSchema({ typeDefs, resolvers })
}