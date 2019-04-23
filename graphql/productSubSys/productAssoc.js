import { queryById } from '../../data'

export default {
  resolversSupp: {
    resolver: {
      ProductAssoc: {
        product: ({ productId: id }) => queryById('product', id),
        productTo: ({ productIdTo: id }) => queryById('product', id),
        productAssocType: ({ productAssocTypeId: id }) => queryById('productAssocType', id),
      },
    }
  },
}