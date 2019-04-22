import { mergeSchemas } from 'graphql-tools'
import productSchema from './product'

export default mergeSchemas({ schemas: [
  productSchema
]})