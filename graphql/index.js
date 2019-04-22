import { mergeSchemas } from 'graphql-tools'
import productSchema from './productSubSys/product'
import productTypeSchema from './productSubSys/productType'
import productCategorySchema from './productSubSys/productCategory'
import productCategoryTypeSchema from "./productSubSys/productCategoryType";

export default mergeSchemas({ schemas: [
  productSchema,
  productTypeSchema,
  productCategorySchema,
  productCategoryTypeSchema,
]})