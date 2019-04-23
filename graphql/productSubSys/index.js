import template from '../template'
import product from './product'
import productCategory from './productCategory'
import productAssoc from './productAssoc'

const sys = 'productSubSys'

export default [
  template(sys, 'product', product),
  template(sys, 'productCategory', productCategory),
  template(sys, 'productAssoc', productAssoc),
  template(sys, 'productAssocType', {}),
  template(sys, 'productCategoryType', {}),
  template(sys, 'productFeatureApplType', {}),
  template(sys, 'productFeatureIactnType', {}),
  template(sys, 'productFeatureType', {}),
  template(sys, 'productPricePurpose', {}),
  template(sys, 'productPriceType', {}),
  template(sys, 'productType', {}),
]