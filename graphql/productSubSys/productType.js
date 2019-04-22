import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers/productSubSys/productType'

const typeDefs = importSchema(path.join(__dirname, '../schema/productSubSys/productType.graphql'))

export default makeExecutableSchema({ typeDefs, resolvers })