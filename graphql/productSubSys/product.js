import { queryById, queryList } from '../../data'

export default {
  typeDefsSupp: {
    queryTypeDefs: `productList(productTypeId: String productName: String): [Product]`,
  },
  resolversSupp: {
    resolver: {
      Product: {
        productType: ({ productTypeId: id }) => queryById('productType', id),
        primaryProductCategory: ({ primaryProductCategoryId: id }) => queryById('productCategory', id),
      },
    },
    query: {
      productList: (_, args) => queryList('product', args)
    },
  },
}