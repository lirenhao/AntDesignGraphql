import { queryById } from '../../data'

export default {
  resolversSupp: {
    resolver: {
      ProductCategory: {
        productCategoryType: ({ productCategoryTypeId: id }) => queryById('productCategoryType', id),
      },
    }
  },
}