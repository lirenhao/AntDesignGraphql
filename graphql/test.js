import path from 'path'
import jsonfile from 'jsonfile'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import dateResolver from './resolvers/scalar/date'
import productResolver from './resolvers/productSubSys/product'

const productFile = path.join(__dirname, '../data/product.json')

const typeDefs = importSchema(path.join(__dirname, '../schema/productSubSys/product.graphql'))

const resolvers = {
  ...dateResolver,
  ...productResolver,
  Query: {
    countByExample: (_, { example }) => ({}),
    selectByExample: (_, { example }) => {
      console.log('test')
      return jsonfile.readFile(productFile)
        .then(({ product }) => Object.keys(product).map(key => product[key]))
    },
    selectByPrimaryKey: (_, { productId }) => ({}),
  },
  Mutation: {
    insert: (_, { hello }) => 1,
    insertSelective: (_, { user }) => 2,
    updateByPrimaryKey: (_, { record }) => 3,
    deleteByPrimaryKey: (_, { productId }) => 4,
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })