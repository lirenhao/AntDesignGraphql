import path from 'path'
import jsonfile from 'jsonfile'
import dateResolver from '../scalar/date'

const typeFile = path.join(__dirname, '../../data/type.json')

export default {
  ...dateResolver,
  Query: {
    productTypeList: () => jsonfile.readFile(typeFile)
      .then(({ productType }) => Object.keys(productType).map(key => productType[key])),
    productTypeById: (_, { id }) => jsonfile.readFile(typeFile).then(({ productType }) => productType[id]),
  },
  Mutation: {
    productTypeInsert: (_, { record }) => {
      return {}
    },
    productTypeUpdateById: (_, { id, record }) => {
      return {}
    },
    productTypeDeleteById: (_, { id }) => {
      return true
    },
  },
}