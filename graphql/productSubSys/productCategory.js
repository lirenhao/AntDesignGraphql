import { queryById } from '../../data'

export default {
  resolversSupp: {
    resolver: {
      ProductCategory: {
        productCategoryType: ({ productCategoryId: id }) => queryById('productCategoryType', id),
      },
    }
  },
}