import { makeExecutableSchema } from 'graphql-tools'
import templateTypeDefs from './schema/template'
import templateResolvers from './resolvers/template'

export default (sys, type, {typeDefsSupp = {}, resolversSupp = {}}) => {
  const typeDefs = templateTypeDefs(sys, type, typeDefsSupp)
  const resolvers = templateResolvers(type, resolversSupp)
  return makeExecutableSchema({ typeDefs, resolvers })
}