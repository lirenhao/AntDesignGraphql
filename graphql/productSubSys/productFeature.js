import { queryById } from '../../data'

export default {
  resolversSupp: {
    resolver: {
      ProductFeature: {
        productFeatureType: ({ productFeatureTypeId: id }) => queryById('productFeatureType', id),
        uom: ({ uomId: id }) => queryById('uom', id),
      },
    }
  },
}