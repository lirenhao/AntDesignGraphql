import { mergeSchemas } from 'graphql-tools'
import template from './template'
import product from './productSubSys/product'
import productCategory from './productSubSys/productCategory'

export default mergeSchemas({ schemas: [
  template('productSubSys', 'product', product),
  template('productSubSys', 'productType', {}),
  template('productSubSys', 'productCategory', productCategory),
  template('productSubSys', 'productCategoryType', {}),
  template('productSubSys', 'productAssocType', {})
]})