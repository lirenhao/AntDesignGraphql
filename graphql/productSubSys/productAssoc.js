import { queryById, queryList, insetUnion } from '../../data'

export default {
  typeDefsSupp: {
    queryTypeDefs: `productAssocList(productId: String productIdTo: String fromDate: Date): [ProductAssoc]`,
  },
  resolversSupp: {
    resolver: {
      ProductAssoc: {
        product: ({ productId: id }) => queryById('product', id),
        productTo: ({ productIdTo: id }) => queryById('product', id),
        productAssocType: ({ productAssocTypeId: id }) => queryById('productAssocType', id),
      },
    },
    query: {
      productAssocList: (_, args) => queryList('productAssoc', args)
    },
    mutation: {
      productAssocInsert: (_, { record }) => 
        insetUnion('productAssoc', `${record.productId}-${record.productIdTo}`, record),
    },
  },
}