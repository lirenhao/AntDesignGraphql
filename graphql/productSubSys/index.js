import template from '../template'
import product from './product'
import productAssoc from './productAssoc'
import productCategory from './productCategory'
import productFeature from './productFeature'
import productCategoryMember from './productCategoryMember'
import productFeatureAppl from './productFeatureAppl'
import productFeatureIactn from './productFeatureIactn'

const sys = 'productSubSys'

export default [
  template(sys, 'product', product),
  template(sys, 'productAssoc', productAssoc),
  template(sys, 'productAssocType', {}),
  template(sys, 'productCategory', productCategory),
  template(sys, 'productCategoryMember', productCategoryMember),
  // template(sys, 'productCategoryRollup', {}),
  template(sys, 'productCategoryType', {}),
  template(sys, 'productFeature', productFeature),
  template(sys, 'productFeatureAppl', productFeatureAppl),
  template(sys, 'productFeatureApplType', {}),
  template(sys, 'productFeatureIactn', productFeatureIactn),
  template(sys, 'productFeatureIactnType', {}),
  // template(sys, 'productFeaturePrice', {}),
  template(sys, 'productFeatureType', {}),
  // template(sys, 'productPriceComponent', {}),
  // template(sys, 'productPriceComponentExtend', {}),
  template(sys, 'productPricePurpose', {}),
  template(sys, 'productPriceType', {}),
  template(sys, 'productType', {}),
]