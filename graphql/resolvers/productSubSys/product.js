import dateResolver from '../scalar/date'
import { queryList, queryById, insert, updateById } from '../../../data'

module.exports = {
  ...dateResolver,
  Product: {
    productType: ({ productTypeId: id }) => queryById('productType', id),
    primaryProductCategory: ({ primaryProductCategoryId: id }) => queryById('productCategory', id),
  },
  Query: {
    productList: (_, param) => queryList('product', param),
    productById: (_, { id }) => queryById('product', id),
  },
  Mutation: {
    productInsert: (_, { record }) => insert('product', record),
    productUpdateById: (_, { id, record }) => updateById('product', id, record),
    productDeleteById: (_, { id }) => deleteById('product', id),
  },
}