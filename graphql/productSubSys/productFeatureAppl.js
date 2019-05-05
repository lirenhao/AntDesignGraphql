import { queryById, queryList } from '../../data'

export default {
  typeDefsSupp: {
    queryTypeDefs: `productFeatureApplList(productId: String productFeatureId: String): [ProductFeatureAppl]`,
  },
  resolversSupp: {
    resolver: {
      ProductFeatureAppl: {
        product: ({ productId: id }) => queryById('product', id),
        productFeature: ({ productFeatureId: id }) => queryById('productFeature', id),
        productFeatureApplType: ({ productFeatureApplTypeId: id }) => queryById('productFeatureApplType', id),
      },
    },
    query: {
      productFeatureApplList: (_, args) => queryList('productFeatureAppl', args)
    },
  },
}