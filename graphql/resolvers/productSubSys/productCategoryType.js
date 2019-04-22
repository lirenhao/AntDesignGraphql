import path from 'path'
import jsonfile from 'jsonfile'
import dateResolver from '../scalar/date'

const typeFile = path.join(__dirname, '../../data/type.json')

export default {
  ...dateResolver,
  Query: {
    productCategoryTypeList: () => jsonfile.readFile(typeFile)
      .then(({ productCategoryType }) => Object.keys(productCategoryType).map(key => productCategoryType[key])),
    productCategoryTypeById: (_, { id }) => jsonfile.readFile(typeFile)
      .then(({ productCategoryType }) => productCategoryType[id]),
  },
  Mutation: {
    productCategoryTypeInsert: (_, { record }) => {
      return {}
    },
    productCategoryTypeUpdateById: (_, { id, record }) => {
      return {}
    },
    productCategoryTypeDeleteById: (_, { id }) => {
      return true
    },
  },
}