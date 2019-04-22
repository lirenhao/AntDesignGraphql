import path from 'path'
import jsonfile from 'jsonfile'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'
import dateResolver from './resolvers/scalar/date'
import productResolver from './resolvers/productSubSys/product'

const typeFile = path.join(__dirname, '../data/type.json')
const productFile = path.join(__dirname, '../data/product.json')

const typeDefs = importSchema(path.join(__dirname, './schema/product.graphql'))

const resolvers = {
  ...dateResolver,
  ...productResolver,
  Query: {
    productCategory: () => {
      return jsonfile.readFile(productFile)
        .then(({ category }) => Object.keys(category).map(key => category[key]))
    },
    productCategoryMember: (_, { productId, productCategoryId }) => {
      return jsonfile.readFile(productFile).then(({ categoryMember }) =>
        Object.keys(categoryMember)
          .map(key => categoryMember[key])
          .filter(item => (productId ? item.productId === productId : true))
          .filter(item => (productCategoryId ? item.productCategoryId === productCategoryId : true))
      );
    },
    productFeatureIactnType: () => {
      return jsonfile.readFile(typeFile)
        .then(({ productFeatureIactnType }) => Object.keys(productFeatureIactnType).map(key => productFeatureIactnType[key]))
    },
    productFeatureApplType: () => {
      return jsonfile.readFile(typeFile)
        .then(({ productFeatureApplType }) => Object.keys(productFeatureApplType).map(key => productFeatureApplType[key]))
    },
    productFeature: () => {
      return jsonfile.readFile(productFile)
        .then(({ feature }) => Object.keys(feature).map(key => feature[key]))
    },
    productFeatureIactn: (_, { productFeatureId, productFeatureIdTo, productId }) => {
      return jsonfile.readFile(productFile).then(({ featureIactn }) =>
        Object.keys(featureIactn)
          .map(key => featureIactn[key])
          .filter(item => (productFeatureId ? item.productFeatureId === productFeatureId : true))
          .filter(item => (productFeatureIdTo ? item.productFeatureIdTo === productFeatureIdTo : true))
          .filter(item => (productId ? item.productId === productId : true))
      );
    },
    productFeatureAppl: (root, { productId, productFeatureId }, context) => {
      return jsonfile.readFile(productFile).then(({ featureAppl }) =>
        Object.keys(featureAppl)
          .map(key => featureAppl[key])
          .filter(item => (productId ? item.productId === productId : true))
          .filter(item => (productFeatureId ? item.productFeatureId === productFeatureId : true))
      );
    }
  },
}

export default makeExecutableSchema({ typeDefs, resolvers })