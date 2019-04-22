import { queryById } from '../../data'

export default {
  resolversSupp: {
    resolver: {
      Product: {
        productType: ({ productTypeId: id }) => queryById('productType', id),
        primaryProductCategory: ({ primaryProductCategoryId: id }) => queryById('productCategory', id),
      },
    }
  },
}