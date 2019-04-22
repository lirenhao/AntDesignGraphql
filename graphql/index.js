import { mergeSchemas } from 'graphql-tools'
import template from './template'

export default mergeSchemas({ schemas: [
  template('productSubSys', 'product'),
  template('productSubSys', 'productType'),
  template('productSubSys', 'productCategory'),
  template('productSubSys', 'productCategoryType'),
]})