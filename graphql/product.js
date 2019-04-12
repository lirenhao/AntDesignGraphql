import path from 'path'
import jsonfile from 'jsonfile'
import { importSchema } from 'graphql-import'
import { makeExecutableSchema } from 'graphql-tools'

const typeFile = path.join(__dirname, '../data/type.json')
const productFile = path.join(__dirname, '../data/product.json')

const typeDefs = importSchema(path.join(__dirname, '../schema/product.graphql'))

const resolvers = {
  Product: {
    productType: ({ productTypeId }) =>
      jsonfile.readFile(typeFile).then(({ productType }) => productType[productTypeId] || {}),
    primaryProductCategory: ({ primaryProductCategoryId }) =>
      jsonfile
        .readFile(productFile)
        .then(({ category }) => category[primaryProductCategoryId] || {}),
  },
  ProductCategory: {
    productCategoryType: ({ productCategoryTypeId }) =>
      jsonfile
        .readFile(typeFile)
        .then(({ productCategoryType }) => productCategoryType[productCategoryTypeId] || {}),
  },
  ProductCategoryMember: {
    productCategory: ({productCategoryId}) =>
      jsonfile
        .readFile(productFile)
        .then(({ category }) => category[productCategoryId] || {}),
    product: ({productId}) =>
      jsonfile.readFile(productFile).then(({ product }) => product[productId] || {}),
  },
  ProductFeature: {
    productFeatureType: ({productFeatureTypeId}) =>
      jsonfile.readFile(typeFile)
        .then(({ productFeatureType }) => productFeatureType[productFeatureTypeId] || {}),
  },
  ProductFeatureIactn: {
    productFeature: ({productFeatureId}) => 
      jsonfile.readFile(productFile).then(({ feature }) => feature[productFeatureId] || {}),
    productFeatureTo: ({productFeatureIdTo}) => 
      jsonfile.readFile(productFile).then(({ feature }) => feature[productFeatureIdTo] || {}),
    productFeatureIactnType: ({productFeatureIactnTypeId}) => 
      jsonfile.readFile(typeFile)
        .then(({ productFeatureIactnType }) => productFeatureIactnType[productFeatureIactnTypeId] || {}),
    product: ({productId}) =>
      jsonfile.readFile(productFile).then(({ product }) => product[productId] || {}),
  },
  ProductFeatureAppl: {
    product: ({productId}) =>
      jsonfile.readFile(productFile).then(({ product }) => product[productId] || {}),
    productFeature: ({productFeatureId}) => 
      jsonfile.readFile(productFile).then(({ feature }) => feature[productFeatureId] || {}),
    productFeatureApplType: ({productFeatureApplTypeId}) => 
      jsonfile.readFile(typeFile)
        .then(({ productFeatureApplType }) => productFeatureApplType[productFeatureApplTypeId] || {}),
  },
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
    productFeatureIactn: (_, { productFeatureId, productFeatureIdTo, productId }) => {
      return jsonfile.readFile(productFile).then(({ featureIactn }) =>
        Object.keys(featureIactn)
          .map(key => featureIactn[key])
          .filter(item => (productFeatureId ? item.productFeatureId === productFeatureId : true))
          .filter(item => (productFeatureIdTo ? item.productFeatureIdTo === productFeatureIdTo : true))
          .filter(item => (productId ? item.productId === productId : true))
      );
    },
    productFeatureAppl: (_, { productId, productFeatureId }) => {
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