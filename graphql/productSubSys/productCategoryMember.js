import { queryById, queryList } from '../../data'

export default {
  typeDefsSupp: {
    queryTypeDefs: `productCategoryMemberList(productCategoryId: String productId: String): [ProductCategoryMember]`,
  },
  resolversSupp: {
    resolver: {
      ProductCategoryMember: {
        productCategory: ({ productCategoryId: id }) => queryById('productCategory', id),
        product: ({ productId: id }) => queryById('product', id),
      },
    },
    query: {
      productCategoryMemberList: (_, args) => queryList('productCategoryMember', args)
    },
  },
}