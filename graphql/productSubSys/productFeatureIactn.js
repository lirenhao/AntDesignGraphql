import { queryById, queryList } from '../../data'

export default {
  typeDefsSupp: {
    queryTypeDefs: `productFeatureIactnList(productId: String productFeatureId: String): [ProductFeatureIactn]`,
  },
  resolversSupp: {
    resolver: {
      ProductFeatureIactn: {
        product: ({ productId: id }) => queryById('product', id),
        productFeature: ({ productFeatureId: id }) => queryById('productFeature', id),
        productFeatureTo: ({ productFeatureIdTo: id }) => queryById('productFeature', id),
        productFeatureIactnType: ({ productFeatureIactnTypeId: id }) => queryById('productFeatureIactnType', id),
      },
    },
    query: {
      productFeatureIactnList: (_, args) => queryList('productFeatureIactn', args)
    },
  },
}