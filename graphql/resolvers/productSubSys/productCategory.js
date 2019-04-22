import path from 'path'
import jsonfile from 'jsonfile'
import dateResolver from '../scalar/date'

const typeFile = path.join(__dirname, '../../data/type.json')

module.exports = {
  ...dateResolver,
  ProductCategory: {
    productCategoryType: ({ productCategoryTypeId: id }) => queryById('productCategoryType', id),
  },
  Query: {
    productCategoryList: (_, { productCategoryTypeId, categoryName }) => {
      return jsonfile.readFile(productFile).then(({ productCategory }) =>
        Object.keys(productCategory)
          .map(key => productCategory[key])
          .filter(item => (productCategoryTypeId ? item.productCategoryTypeId === productCategoryTypeId : true))
          .filter(item => (categoryName ? item.categoryName === categoryName : true))
      )
    },
    productCategoryById: (_, { id }) => jsonfile.readFile(productFile)
      .then(({ productCategory }) => productCategory[id]),
  },
  Mutation: {
    productCategoryInsert: (_, { record }) => {
      return {}
    },
    productCategoryUpdateById: (_, { id, record }) => {
      return {}
    },
    productCategoryDeleteById: (_, { id }) => {
      return true
    },
  },
}