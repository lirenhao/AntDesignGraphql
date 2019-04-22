import path from 'path'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import resolvers from '../resolvers/productSubSys/product'

const typeDefs = importSchema(path.join(__dirname, '../schema/productSubSys/product.graphql'))

export default makeExecutableSchema({ typeDefs, resolvers })